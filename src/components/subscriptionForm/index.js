import React, { useState } from "react";
import Link from 'next/link';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    paymentMethod: "credit-card",
    agreeToTerms: false,
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the email is in the correct format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Check if the passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    } else {
      setPasswordError("");
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }

    // If all checks pass, you can submit the form
    console.log("Form submitted:", formData);
  };

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
          <label htmlFor="subscription-tier" className="text-xl block font-semibold">
            Select Your Subscription Tier:
          </label>
          <select
            id="subscription-tier"
            name="subscription-tier"
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
          <label htmlFor="name" className=" text-xl block font-semibold">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded border p-2 w-full"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-xl block font-semibold">
            Your Email:
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
          <label htmlFor="confirmPassword" className="text-xl block font-semibold">
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

        <div className="mb-4 my-4">
          <label className="text-xl block font-semibold">Payment Method:</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="credit-card"
              name="paymentMethod"
              value="credit-card"
              className="mr-2"
              onChange={handleInputChange}
              checked={formData.paymentMethod === "credit-card"}
            />
            <label htmlFor="credit-card"  className="text-xl block font-semibold">Credit Card</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              className="mr-2"
              onChange={handleInputChange}
              checked={formData.paymentMethod === "paypal"}
            />
            <label htmlFor="paypal"  className="text-xl block font-semibold">PayPal</label>
          </div>
        </div>

        <div class="flex items-start mb-6 my-6">
          <div class="flex items-center h-5 mb-4">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              class="w-7 h-7 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            class="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <Link
              href="/terms"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Subscribe
        </button>
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
