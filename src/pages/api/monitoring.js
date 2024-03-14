// api/monitoring/route.ts
export default async function POST(req, res) {
  try {
    
    if (!req.body) {
      return res.json(
        { error: "Error can't be tunneled because the body is empty." },
        { status: 400 }
      );
    }

    const envelope = req.body;


    const piece = envelope.split("\n")[0];
    const header = JSON.parse(piece);

    const dsn = new URL(header.dsn);
    console.log("DSN", dsn);
    console.log("SENTRY_HOST", process.env.SENTRY_HOST);
    
    if (dsn.hostname !== process.env.SENTRY_HOST) {
      return res.json(
        { error: `Invalid Sentry host: ${dsn.hostname}` },
        { status: 400 }
      );
    }

    const project_id = dsn.pathname.substring(1);
    if (project_id !== process.env.SENTRY_PROJECT_ID) {
      return res.json(
        { error: `Invalid Project ID: ${project_id}` },
        { status: 400 }
      );
    }

    const url = `https://${process.env.SENTRY_HOST}/api/${project_id}/envelope/`;
    console.log("URL", url);
    await fetch(url, {
      method: "POST",
      body: envelope,
      headers: {
        "Content-Type": "application/x-sentry-envelope",
      },
    });
  } catch (e) {
    return res.json(
      {
        error: "Could not tunnel Sentry error correctly.",
        data: e.message,
      },
      { status: 500 }
    );
  }

  return res.json({ message: "Error sent." }, { status: 200 });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb',
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 60,
}