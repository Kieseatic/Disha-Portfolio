"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

// components
import { Button } from "../components/ui/button";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex flex-col justify-center xl:justify-between py-12 xl:py-0"
    >
      <div className="container mx-auto max-w-[1280px] flex-1 flex items-center">
        {/* main content */}
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-[100px] w-full">
          {/* photo */}
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>
          {/* text */}
          <div className="flex flex-col gap-4 w-auto max-w-[400px] text-center xl:text-left">
            {/* hello */}
            <motion.div
              variants={fadeIn("down", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="h1  text-[#ffc95f]">
                Hello!
                <br />
                I'm <span className="text-accent">Disha</span>
              </h1>
            </motion.div>
            {/* bio */}
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="p text-white/80"
            >
              <p>
                A Marketing & Communications Specialist with expertise in
                <span className="font-extrabold">
                  {" "}
                  digital marketing, content creation, and brand management.{" "}
                </span>
                Professional experience in social media strategy, eCommerce, and
                analytics, driving engagement and brand growth. Skilled in{" "}
                <span className="font-extrabold">
                  Google Analytics, SEO, and cross-channel campaigns.
                </span>{" "}
                Passionate about creating impactful marketing solutions.
              </p>
            </motion.div>
            {/* take action */}
            <motion.h3
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h3 leading-normal"
            >
              Ready to transform ideas into impactful marketing solutions?
            </motion.h3>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center justify-center xl:items-center xl:justify-start gap-6 pt-2">
              <motion.a
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                href="/assets/Disha-Gandhi-Resume.pdf"
                download
                aria-label="Download Disha's CV"
              >
                <Button
                  variant="outline"
                  size="md"
                  className="uppercase flex items-center gap-2 border-[#ffc95f] text-[#ffc95f] hover:bg-[#ffc95f] hover:text-black"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </motion.a>
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-8 xl:mb-0 flex justify-center"
              >
                <Social />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats at the bottom */}
      <div className="w-full">
        <Stats />
      </div>
    </motion.div>
  );
};

export default Home;
