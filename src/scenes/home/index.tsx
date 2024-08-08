import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import BigLogo from "@/assets/biglogo.png";
import DeveloperImage from "@/assets/picture1.png"; // Change to a relevant developer image
import SponsorVue from "@/assets/vuejslogo.png";
import SponsorReact from "@/assets/reactlogo.png";
import SponsorTS from "@/assets/typescriptlogo.png";
import SponsorJava from "@/assets/javalogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import AdComponent from "@/components/AdComponent";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const flexBetween = "flex items-center justify-between";
  const [areAdsVisible, setAreAdsVisible] = useState<boolean>(false);

  const toggleAdsVisibility = () => {
    setAreAdsVisible(!areAdsVisible);
  };

  return (
    <section id="home" className="gap-16 bg-white py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* <div className="relative">
              <img alt="big-logo" src={BigLogo} className="w-2/3 h-2/3"/>
            </div> */}

            <h1 className="mt-8 text-xl font-bold">
              Hi, I'm Jimmy Sergio, a passionate Software Developer.
            </h1>
            <p className="mt-4 text-sm">
              I'm a software developer who specializes in building modern web applications using the latest technologies like Vue.js, React, TypeScript, and Java. Let's create something amazing together.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact Me
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="developer-image" src={DeveloperImage} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-white py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="vue-sponsor" src={SponsorVue} className="w-[14%]"/>
              <img alt="react-sponsor" src={SponsorReact} className="w-[14%]"/>
              <img alt="typescript-sponsor" src={SponsorTS} className="w-[14%]"/>
              <img alt="java-sponsor" src={SponsorJava} className="w-[14%]"/>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER FOR ADS */}
      {areAdsVisible && (
        <footer className="fixed bottom-0 z-30 w-full bg-primary-100 py-4 drop-shadow">
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className="flex w-full justify-center">
              <div className="flex gap-4">
                <div className="">
                  <AdComponent />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Button to toggle ads */}
      <div className="fixed bottom-16 right-16 z-40">
        <button
          className="bg-secondary-500 text-white p-4 rounded-full"
          onClick={toggleAdsVisibility}
        >
          Ads
        </button>
      </div>
    </section>
  );
};

export default Home;
