import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-[url('/images/bgkids.png')] bg-cover container">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="h-full px-8 py-8 text-center md:text-left ">
          <h1 className="white-text text-red-700 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            17,567,723
          </h1>
          <h2 className="white-text text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Food bars Handed out
          </h2>
          <p className="text-white text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-4">
            At Help&apos;em, we believe in the power of community and technology coming together to make a difference. 
            Join us in our mission to combat hunger and provide food for those who need it most in Africa.
          </p>
          <button
            type="button"
            className=" px-6 py-3.5 mb-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Become a member
          </button>
        </div>
        <div className="white-text h-96 md:h-full px-8 py-8 text-center md:text-left">
            <h2 className=" text-6xl mb-4 text-center mt-4 font-extrabold leading-none tracking-tight dark:text-white">
              Feeding Hope<br/><span >in Africa</span>
            </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
