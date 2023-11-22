
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="container mt-4 px-16 py-20">
        <h1 class="text-4xl font-semibold leading-normal  dark:text-white mb-2">
          Ending Hunger in Africa
        </h1>
        <p class="text-left text-2xl mt-2 mb-12">
          At Help'em, our cause is simple yet profound - to end hunger and bring
          sustenance to the people of Africa. Discover why our mission matters,
          the challenges we face, and how you can be a part of the solution.
        </p>

        <h4 class="text-4xl font-semibold leading-normal  dark:text-white mb-2">
          The Challenge
        </h4>
        <p class="text-left text-2xl mt-2 mb-12">
          Hunger in Africa is a pressing and complex issue. Despite the
          continent's abundant resources, millions of people go to bed hungry
          every night. The causes are numerous, including poverty, food
          scarcity, conflict, and inequality. We believe that addressing hunger
          is not just a moral imperative but also essential for the progress and
          well-being of the entire continent.
        </p>

        <h4 class="text-4xl font-semibold leading-normal  dark:text-white mb-2">
          Why Our Cause Matters
        </h4>
        <p class="text-left text-2xl mt-2 mb-12">
          <ol>
            <li>
              <strong>Human Dignity:</strong> Hunger robs individuals of their
              dignity. We believe that every person, regardless of their
              circumstances, deserves the basic human right of access to
              nutritious food.
            </li>
            <br/>
            <li>
              <strong>Community Resilience: </strong>When communities have
              access to consistent nourishment, they become more resilient and
              better equipped to overcome other challenges they face.
            </li>
            <br/>
            <li>
              <strong>Health and Education:</strong> Adequate nutrition is the
              foundation for good health and educational attainment. By
              eradicating hunger, we open doors to a brighter future for
              generations to come.
            </li>
            <br/>
            <li>
              <strong>Sustainable Development:</strong> Addressing hunger is a
              crucial step towards achieving the United Nations Sustainable
              Development Goal of "Zero Hunger."
            </li>
          </ol>
        </p>

        <h4 class="text-4xl font-semibold leading-normal  dark:text-white mb-2">
          Our Approach
        </h4>
        <p class="text-left text-2xl mt-2 mb-12">
          Help'em takes a holistic approach to tackling hunger in Africa.
          <br/>
          We are committed to:
          <br/>
          <br/>
          <ul>
            <li>
              <strong>Producing Nutritious Food Bars:</strong> We produce
              high-quality food bars that serve as a convenient and nourishing
              source of sustenance for those in need.
            </li>
            <br/>
            <li>
              <strong>Distribution:</strong> Our dedicated team and partners
              ensure that these food bars reach the most vulnerable and remote
              communities across the continent.
            </li>
            <br/>
            <li>
              <strong>Transparency: </strong>We are committed to complete
              transparency in our operations and how your contributions are
              used.
            </li>
          </ul>
        </p>

        <h4 class="text-4xl font-semibold leading-normal  dark:text-white my-2">
          Join Us in the Fight Against Hunger
        </h4>
        <p class="text-left text-2xl mt-2 mb-12">
          Our cause is a call to action. Hunger in Africa is a complex issue,
          but it is one that can be solved with your support. By subscribing,
          volunteering, or partnering with Help'em, you become part of a
          movement to end hunger and bring hope to the people of Africa.
        </p>

        <h4 class="text-4xl font-semibold leading-normal  dark:text-white mb-2">
          Meet Our Team
        </h4>
        <p class="text-left text-2xl mt-2 mb-12">
          Our success is a testament to the dedication and passion of our team.
          Meet the individuals who drive Help'em forward, from our founders to
          our committed volunteers. Together, we share a common goal - to
          eradicate hunger in Africa and to bring hope to those who need it
          most.
        </p>
        <h4 class="text-4xl font-semibold leading-normal  dark:text-white mb-2">
          Make a Difference Today
        </h4>
        <p class="text-left text-2xl mt-2 mb-12">
          {" "}
          Your support can change lives, one meal at a time. Join us in the
          fight against hunger in Africa and be a part of a brighter future for
          all.
          
        </p>
      </div>
    </Layout>
  );
}
