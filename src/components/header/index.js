import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container h-full home-page-header flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 flex flex-col justify-center items-center">
        <div className="h-full px-8 py-8 text-center md:text-left">
          <h1 className="white-text text-red-700 text-6xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Feeding Hope in Africa
          </h1>
          <h2 className="white-text text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            5,342 Food bars Handed out
          </h2>
          <p className="text-white text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-4">
            At Help&apos;em, we believe in the power of community and technology
            coming together to make a difference. Join us in our mission to
            combat hunger and provide food for those who need it most in Africa.
          </p>
          <Link
            href="/subscribe"
            className=" px-6 py-3.5 mb-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Become a member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
