import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Mission from "@/components/mission";
import WhyHelpEm from "@/components/whyhelpem";
import GetInvolved from "@/components/getInvolved";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-center">
        Helpem
      </h1>
      <p className="text-2xl text-center mb-4">
        Hope for Africa!
      </p>
      <h1 className="text-4xl font-bold text-center mt-4">
          This website is coming soon
        </h1>

        
      </div>
  );
}
