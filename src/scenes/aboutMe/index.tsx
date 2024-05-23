import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { AboutMeType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Picture2 from "@/assets/picture2.png";
import AboutMes from "./AboutMe";

const aboutmes: Array<AboutMeType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Education",
    description:
      "I studied at the Namibian University of Science and Technology, where I gained a solid foundation in computer science and software development.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Professional Experience",
    description:
      "I have worked mostly in private firms and have experience working both remotely and full-time, allowing me to adapt to different work environments effectively.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Current Studies",
    description:
      "I am currently an honors student pursuing my postgraduate degree in Computer Science, majoring in Software Development, to further deepen my expertise.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutmes" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE ABOUT ME</HText>
          <p className="my-5 text-sm">
            Learn more about my background, experience, and current pursuits in the field of software development. I am passionate about leveraging technology to solve real-world problems and continuously strive to improve my skills.
          </p>
        </motion.div>

        {/* ABOUT ME */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {aboutmes.map((aboutme: AboutMeType) => (
            <AboutMes
              key={aboutme.title}
              icon={aboutme.icon}
              title={aboutme.title}
              description={aboutme.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="w-1/4 h-1/4"
            alt="developer-page-graphic"
            src={Picture2}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    DEDICATED TO{" "}
                    <span className="text-primary-500">INNOVATION</span> AND{" "}
                    <span className="text-primary-500">EXCELLENCE</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                With a strong educational background and diverse professional experience, I am equipped to tackle complex software development challenges. My ongoing studies ensure I stay at the forefront of technological advancements.
              </p>
              <p className="mb-5">
                I am committed to continuous learning and professional growth, always seeking new opportunities to expand my knowledge and apply my skills in innovative ways.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact Me
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
