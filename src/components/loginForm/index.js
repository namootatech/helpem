import React, { useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from 'next/navigation'


const SubscriptionForm = ({ login }) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    paymentMethod: "credit-card",
    agreeToTerms: false,
  });

  const [emailError, setEmailError] = useState("");

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

    const API_URL = process.env.NEXT_PUBLIC_API_URL+"/login";
    console.log(API_URL);
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
       
        if (response.error) {
          setEmailError(response.message);
        } else {
          console.log("You have successfully loggedin.");
          login(response.data);
          
 
          router.push('/app', { scroll: false })
        }
      })
      .catch((error) => {
        setEmailError("Error:", error);
      });
  };

  return (
    <div class="md:w-9/12 h-96 p-4 bg-white  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
        <h5 class="text-2xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 md:text-xl text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 md:text-xl text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="•••••••"
            onChange={handleInputChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ml-2 md:text-xl text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            class="ml-auto md:text-xl text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          class="w-full text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div class="md:text-xl text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link href="/subscribe" class="text-blue-700 hover:underline dark:text-blue-500">
            Create account
          </Link>
        </div>
        <div className="text-red-500">{emailError}</div>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch({ type: "LOGIN", payload: data }),
  };
};

export default connect(null, mapDispatchToProps)(SubscriptionForm);
