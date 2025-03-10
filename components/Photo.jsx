"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative z-10 w-[250px] h-[250px] xl:w-[400px] xl:h-[400px]"
      >
        <Image
          src="/assets/photo.png"
          alt="Disha's photo"
          priority
          quality={100}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-contain"
          fill
        />
      </motion.div>

    
    </div>
  );
};

export default Photo;
