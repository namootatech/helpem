import React, { useEffect, useState } from "react";
import Link from "next/link";
import { postToURL } from "../payfast/payfast";
import { v4 as uuidv4 } from 'uuid';
import { keys } from "ramda";
import moment from "moment";

const PAYFAST_URL = process.env.NEXT_PUBLIC_PAYFAST_URL;
const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID;
const MERCHANT_KEY = process.env.NEXT_PUBLIC_MERCHANT_KEY;

const levelPrices = {
  Nourisher: 50,
  CaringPartner: 100,
  HarmonyAdvocate: 200,
  UnitySupporter: 300,
  HopeBuilder: 500,
  CompassionAmbassador: 1000,
  LifelineCreator: 2000,
  EmpowermentLeader: 3000,
  SustainabilityChampion: 5000,
  GlobalImpactVisionary: 10000,
};

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: null,
    password: null,
    confirmPassword: null,
    agreeToTerms: false,
    subscriptionTier: "Nourisher",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentId = uuidv4();
    postToURL(PAYFAST_URL, {
      merchant_id: MERCHANT_ID,
      merchant_key: MERCHANT_KEY,
      return_url: `${WEBSITE_URL}/subscribe/return?subscriptionTier=${formData.subscriptionTier}&firstName=${formData.firstName}&lastName=${formData.lastName}&email=${formData.email}&paymentMethod=${formData.paymentMethod}&agreeToTerms=${formData.agreeToTerms}&password=${formData.password}&confirmPassword=${formData.confirmPassword}&paymentId=${paymentId}&level=${keys(levelPrices).indexOf(formData.subscriptionTier) + 1}`,
      cancel_url:`${WEBSITE_URL}/subscribe/cancel`,
      notify_url: `${API_URL}/notify`,
      name_first: formData.firstName,
      name_last: formData.lastName,
      email_address: formData.email,
      m_payment_id: paymentId,
      amount: levelPrices[formData.subscriptionTier],
      item_name: `Helpem Subscription`,
      item_description: `Helpem Subscription for ${formData.firstName} ${formData.lastName} for the ${formData.subscriptionTier} package.`,
      subscription_type: 1,
      billing_date: moment().format("YYYY-MM-DD"),
      recurring_amount: levelPrices[formData.subscriptionTier],
      frequency: 3,
      cycles: 12,
      subscription_notify_email: true,
      subscription_notify_webhook: true,
      subscription_notify_buyer: true,
    });
  };

  const toggleTerms = () => {
    setFormData({
      ...formData,
      agreeToTerms: !formData.agreeToTerms,
    });
  };

  useEffect(() => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email) && email !== null) {
      setEmailError("Please enter a valid email address.");
      setCanSubmit(false);
    } else {
      setEmailError("");
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      setCanSubmit(false);
    } else {
      setPasswordError("");
    }

    if (formData.agreeToTerms === false) {
      setTermsError("You must agree to the terms and conditions.");
      setCanSubmit(false);
    } else {
      setTermsError("");
    }

    if (
      formData.agreeToTerms === true &&
      formData.password === formData.confirmPassword &&
      emailPattern.test(formData.email)
    ) {
      setCanSubmit(true);
    }
  });
  return (
    <div className="md:w-9/12 p-8 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-4xl">
        Join Help'em - Be a Hope Builder!
      </h1>
      <p className="mb-4 mt-2 text-2xl">
        Subscribe to Help'em, and join us in our mission to end hunger in
        Africa. Choose a subscription tier and start making a real difference
        today.
      </p>

      <form onSubmit={handleSubmit} className="my-12">
        <div className="mb-4">
          <label
            htmlFor="subscriptionTier"
            className="text-xl block font-semibold"
          >
            Select Your Subscription Tier:
          </label>
          <select
            id="subscriptionTier"
            name="subscriptionTier"
            className="rounded border p-2 w-full"
            onChange={handleInputChange}
          >
            <option value="Nourisher">Nourisher Level (R50/month)</option>
            <option value="CaringPartner">
              Caring Partner Level (R100/month)
            </option>
            <option value="HarmonyAdvocate">
              Harmony Advocate Level (R200/month)
            </option>
            <option value="UnitySupporter">
              Unity Supporter Level (R300/month)
            </option>
            <option value="HopeBuilder">Hope Builder Level (R500/month)</option>
            <option value="CompassionAmbassador">
              Compassion Ambassador Level (R1000/month)
            </option>
            <option value="LifelineCreator">
              Lifeline Creator Level (R2000/month)
            </option>
            <option value="EmpowermentLeader">
              Empowerment Leader Level (R3000/month)
            </option>
            <option value="SustainabilityChampion">
              Sustainability Champion Level (R5000/month)
            </option>
            <option value="GlobalImpactVisionary">
              Global Impact Visionary Level (R10,000/month)
            </option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className=" text-xl block font-semibold">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="rounded border p-2 w-full"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className=" text-xl block font-semibold">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="rounded border p-2 w-full"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-xl block font-semibold">
            Email address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded border p-2 w-full"
            required
            onChange={handleInputChange}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-xl block font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded border p-2 w-full"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="text-xl block font-semibold"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="rounded border p-2 w-full"
            required
            onChange={handleInputChange}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        <div className="flex items-start mb-6 my-6">
          <div className="flex items-center h-5 mb-4">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              value={formData.agreeToTerms}
              onChange={toggleTerms}
              className="w-7 h-7 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <Link
              href="/terms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
          </label>
          <br />
        </div>
        {termsError && <p className="text-red-500">{termsError}</p>}
        <br />
        {canSubmit && (
          <>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Subscribe
          </button>
          </>

        )}
        {!canSubmit && (
          <button
            className="bg-gray-300 px-4 py-2 rounded cursor-not-allowed opacity-50"
            disabled
          >
            Subscribe
          </button>
        )}
      </form>
      <p className="mb-4 mt-4 text-2xl mt-4">
        When you subscribe, you'll become a Hope Builder. Here's how it works:
      </p>
      <ul className="list-disc ml-6 text-2xl">
        <li>
          Your recruits pay a monthly subscription fee, depending on the package
          they have selected.
        </li>
        <li>
          You earn 40% of the monthly subscription fee from each of your
          recruits as Monthly Income per Recruit.
        </li>
        <li>
          50% of the money you earn goes toward food parcels to help those in
          need as Monthly Contribution to Food Packages per Recruit.
        </li>
        <li>10% goes toward the system as Monthly Income Toward the System.</li>
      </ul>

      <p className="mt-4 text-2xl">
        Your subscription is more than a commitment; it's a promise of hope.
        Join us today and help us create a world where no one goes to bed
        hungry.
      </p>
    </div>
  );
};

export default SubscriptionForm;
