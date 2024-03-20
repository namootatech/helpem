// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { ProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://430d80276aa0c77279f7df881a8ca7ef@o4506910441865216.ingest.us.sentry.io/4506910446583808",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  tracesSampleRate: 1.0,
  _experiments: {
    metricsAggregator: true,
  },
  integrations: [
    // Add profiling integration to list of integrations
    new ProfilingIntegration(),
  ],
});
