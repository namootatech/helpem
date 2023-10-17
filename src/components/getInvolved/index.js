 import Image from 'next/image';
 import Link from "next/link";
const GetInvolved = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="h-full px-8 py-8 text-center md:text-left ">
          <h2 className="text-red-700 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Get Involved
          </h2>
          <p className=" text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-4">
            Ready to make a difference? Join us today by subscribing to
            Help&apos;em. Together, we can turn the tide against hunger in
            Africa.
          </p>
          <h2 className="text-red-700 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Subscribe Now
          </h2>
          <p className="text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-4">
            By subscribing to Help&apos;em, you not only provide sustenance but
            also hope to those who need it most. Join us in our mission to put
            food on every table in Africa.
          </p>
          <Link
            href="/subscribe"
            className=" px-6 py-3.5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </Link>
        </div>
        <div className="bg-[url('/images/getinvolved.jpg')] bg-cover h-96 section-image"></div>
      </div>
    </div>
  );
};

export default GetInvolved;
