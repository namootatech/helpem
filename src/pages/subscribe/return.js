import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty, omit } from "ramda";
const inter = Inter({ subsets: ["latin"] });

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ReturnPage() {
  const [success, setSuccess] = useState(false);
  const [failedToSubmit, setFailedToSubmit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const params = useSearchParams();

  const userData = {};
  for (const [key, value] of params.entries()) {
    userData[key] = value;
  }


  useEffect(() => {
    if(!isEmpty(userData) && !hasSubmitted){
      axios
      .post(`${API_URL}/register`, userData)
      .then((res) => {
        setSuccess(true);
        setLoading(false);
        setHasSubmitted(true)
      })
      .catch((err) => {
        setFailedToSubmit(true);
        setLoading(false);
      });
    }
  }, [userData]);

  function copy() {
    // Get the text field
    var copyText = document.getElementById("copy");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  return (
    <Layout>
      {success && (
        <div class="max-w-2xl mx-auto p-4 bg-white rounded-lg ">
          <h1 class="text-3xl font-bold mb-4">
            Thank You for Subscribing to Help'em!
          </h1>

          <div class="prose">
            <p>
              Welcome to the Hope Builders Community! Congratulations and thank
              you for taking the first step in making a positive impact! Your
              subscription to Help'em signifies your commitment to ending hunger
              in Africa and becoming a vital part of our community.
            </p>

            <h2 class="font-bold mt-4">What Happens Next?</h2>
            <ol class="list-decimal pl-6 space-y-2">
              <li>
                Welcome Email: You will receive a welcome email shortly with
                important information about your subscription, including details
                about your chosen tier, benefits, and how you can get started.
              </li>
              <li>
                Dashboard Access: Gain access to your personalized dashboard,
                where you can track your progress, view your recruits, and stay
                updated on the impact you're making.
              </li>
              <li>
                Support Resources: Explore our resources section for guides,
                tips, and tools to maximize your contribution and help you
                thrive as a Hope Builder.
              </li>
            </ol>

            <h2 class="font-bold mt-4">Your Impact</h2>
            <p>
              Every subscription is a beacon of hope for those facing hunger.
              Your monthly commitment helps fund food parcels, support local
              farmers, and sustain our mission to create a hunger-free Africa.
            </p>

            <h2 class="font-bold mt-4">Connect with Us</h2>
            <p>
              Join our community on social media to connect with other Hope
              Builders, share your experiences, and stay informed about the
              positive changes your contributions are making.
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/helpem"
                  class="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Help'em on Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/helpem"
                  class="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Help'em on Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/helpem"
                  class="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Help'em on Instagram
                </a>
              </li>
            </ul>

            <button class="mt-8 bg-red-800 text-white py-2 px-4 rounded hover:bg-red-900">
              Login to Your Dashboard
            </button>

            <p class="mt-4">
              Thank you for being a Hope Builder and joining us in the fight
              against hunger. Together, we can make a difference!
            </p>
          </div>
        </div>
      )}
      {failedToSubmit && (
        <div class="max-w-2xl mx-auto p-4 bg-white rounded-lg h-96 flex flex-col justify-center items-center">
          <h1 class="text-3xl font-bold mb-4">Something went wrong...</h1>
          <div class="prose">
            <p className="mt-4 mb-4">
              We were unable to process your subscription.
            </p>
            <p className="mt-4 mb-4">Your transaction number is :</p>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  value={userData.paymentId}
                  id="copy"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <button
                  onClick={copy}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Copy text
                </button>
              </div>
            </div>
            <br />
            <p className="mb-4">
              Please contact us at{" "}
              <a href="mailto:failed_subscription@helpem.co.za">
                failed_subscription@helpem.co.za
              </a>
            </p>
          </div>
        </div>
      )}

      {loading && (
        <div class="max-w-2xl mx-auto p-4 bg-white rounded-lg h-screen flex flex-col justify-center items-center">
          <h1 class="text-3xl font-bold mb-4">Processing...</h1>
          <p class="prose">
            We are processing your subscription. Please wait...
          </p>
        </div>
      )}
    </Layout>
  );
}
