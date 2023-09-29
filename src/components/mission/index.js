 import Image from 'next/image';

const Mission = () => {
  return (
    <div className="container">
      <div class="grid md:grid-cols-2 grid-cols-1">
        <div className="bg-[url('/images/mission.jpg')] bg-cover h-96 md:h-full"></div>
        <div className="h-full px-8 py-8 text-center md:text-left">
          <h2 className="text-red-700 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className=" text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-4">
            Help&apos;em is an initiative by Food on Every Table NPO, dedicated
            to eradicating hunger in Africa. We believe that no one should go to
            bed hungry, and we're committed to making a positive change.
          </p>
          <h2 className="text-red-700 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
            How You Can Help
          </h2>
          <p className="text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-white mb-4">
            Subscribe to Help&apos;em and become part of our community of
            change-makers. By subscribing, you not only help us manufacture food
            bars but also participate in distributing them to the most
            vulnerable communities across Africa.
          </p>
          <button
            type="button"
            className=" px-6 py-3.5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
