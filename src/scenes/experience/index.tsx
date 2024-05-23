import { SelectedPage, ExperienceType } from "@/shared/types";
import image1 from "@/assets/screenshot1.png";
import image2 from "@/assets/screenshot2.png";
import image3 from "@/assets/screenshot3.png";
import image4 from "@/assets/comingsoon.jpeg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Experience from "./Experience";

const experiences: Array<ExperienceType> = [
  {
    name: "Campaign Management System",
    description:
      "I recently worked on a campaign management system that helps businesses plan, execute, and analyze their marketing campaigns efficiently. This project involved backend development, database design, and API integrations.",
    image: image1,
  },
  {
    name: "Client Data Capture Website",
    description:
      "This project focused on developing a website that captures and manages client data securely. The website features user authentication, form validation, and data storage functionalities.",
    image: image2,
  },
  {
    name: "AdServer Development",
    description:
      "I contributed to the development of an AdServer that serves and tracks digital ads. This system is designed for high performance and scalability, incorporating various ad formats and targeting options.",
    image: image3,
  },
  {
    name: "More To Come",
    description:
      "Stay tuned for more exciting projects! I am constantly working on new and innovative solutions in the software development space.",
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Experiences = ({ setSelectedPage }: Props) => {
  return (
    <section id="experiences" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>MY PROJECTS</HText>
            <p className="py-5">
              Here are some of the recent projects I have worked on. These projects showcase my skills in various areas of software development, from backend systems to user-centric websites. I am always eager to take on new challenges and create impactful solutions.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {experiences.map((item: ExperienceType, index) => (
              <Experience
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;