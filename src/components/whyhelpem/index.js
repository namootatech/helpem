 import Image from 'next/image';
import { GiFoodTruck } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import {HiUserGroup} from 'react-icons/hi';

const WhyHelpEm = () => {
  return (
    <div className="h-full w-full px-10 py-10 px-10 text-center md:text-left bg-red-700 text-gray-100 text-center">
      <h2 className=" text-6xl mb-4 text-center mt-4 font-extrabold leading-none tracking-tight dark:text-white">
        Why Help&apos;em
      </h2>
      <br />
      <br />
      <br />
      <div class=" w-4/5  grid md:grid-cols-3 grid-cols-1 flex flex-col justify-center items-center ">
        <div className="py-4 flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <GiFoodTruck size="5em" />
            <h2 className="text-4xl py-4 font-bold">Impact</h2>
          </div>

          <p className="text-2xl text-base/loose">
            Your subscription directly translates into meals for those in need.
          </p>
        </div>
        <div className="py-4 flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <BsBook size="5em" />
            <h2 className="text-4xl py-4 font-bold">Transparency</h2>
          </div>

          <p className="text-2xl text-base/loose w-4/5">
            We are committed to complete transparency in our operations and how
            your contributions are used.
          </p>
        </div>
        <div className=" py-4 flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <HiUserGroup size="5em" />
            <h2 className="text-4xl py-4 font-bold">Community</h2>
          </div>

          <p className="text-2xl text-base/loose">
            Join a passionate community of individuals dedicated to ending
            hunger in Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyHelpEm;
