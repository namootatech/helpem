import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import SubscriptionForm from "@/components/subscriptionForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="container mt-4 md:px-10 md:py-10 px-2 py-2">
        <SubscriptionForm />
      </div>
    </Layout>
  );
}
