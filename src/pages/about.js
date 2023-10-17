import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Mission from "@/components/mission";
import WhyHelpEm from "@/components/whyhelpem";
import GetInvolved from "@/components/getInvolved";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="container mt-4 px-16 py-20">
        <h1 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-2">Feeding Hope in Africa</h1>
        <p class="text-left text-2xl dark:text-gray-400 mt-2 mb-12">
          Welcome to Help'em, a dedicated initiative by Food on Every Table NPO
          with a singular mission - to end hunger and bring hope to communities
          in need across Africa.
        </p>

        <h4 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-2">Our Story</h4>
        <p class="text-left text-2xl dark:text-gray-400 mt-2 mb-12">
          Help'em was born from a deep sense of responsibility and a shared
          commitment to address one of the most pressing challenges facing
          Africa - hunger. Our journey began in 2018,
          when a group of compassionate individuals decided that we can no
          longer stand by while fellow Africans go to bed hungry. From those
          early days, Help'em has grown into a beacon of hope, serving as a
          symbol of unity, compassion, and resilience. Our journey is marked by
          unwavering dedication to our cause.
        </p>

        <h4 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-2">Our Mission</h4>
        <p class="text-left text-2xl dark:text-gray-400 mt-2 mb-12">
          At Help'em, we believe that no one should endure the pain of an empty
          stomach. Our mission is clear - to provide nourishment to those in
          need and to restore hope in the hearts of the underserved.
        </p>

        <h4 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-2">What We Do</h4>
        <p class="text-left text-2xl dark:text-gray-400 mt-2 mb-12">
          Help'em is more than an initiative; it's a lifeline. We work
          tirelessly to produce nutritious food bars, but our mission extends
          beyond that. We make it our duty to ensure that these life-saving
          resources reach the farthest corners of Africa. With a dedicated team
          and trusted partners, we are making a tangible difference every day.
        </p>

        <h4 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white my-2">Our Values</h4>
        <p class="text-left text-2xl dark:text-gray-400 mt-2 mb-12">
          At Help'em, our values serve as our guiding light. They include "compassion," "transparency,"
          "collaboration," and these principles underpin everything we do. We
          take pride in our commitment to complete transparency in our
          operations, ensuring that every contribution makes a meaningful
          impact.
        </p>

        <h4 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-2">Meet Our Team</h4>
        <p class="text-left text-2xl dark:text-gray-400 mt-2 mb-12">
          Our success is a testament to the dedication and passion of our team.
          Meet the individuals who drive Help'em forward, from our founders to
          our committed volunteers. Together, we share a common goal - to
          eradicate hunger in Africa and to bring hope to those who need it
          most.
        </p>
        <h4 class="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white mb-2">Join the Movement</h4>
        <p class="text-left text-2xl dark:text-gray-400 mt-2 mb-12">
          {" "}
          Help'em is more than an initiative; it's a movement of compassion,
          driven by the belief that change is possible when people come
          together. Whether you're interested in subscribing, volunteering, or
          partnering with us, we invite you to be a part of our journey.
          Together, we can turn the tide against hunger in Africa and bring hope
          to the heart of every African. Thank you for being a part of our
          story.
        </p>
      </div>
    </Layout>
  );
}
