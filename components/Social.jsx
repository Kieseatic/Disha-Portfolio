import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/disha-gandhi-619a12229/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/disha._gandhi/" },
  //{ icon: <FaEnvelope />, path: "mailto:dishamgandhi.30@gmail.com" },
];

const Social = () => (
  <div className="flex gap-4">
    {/* Social Links */}
    {socials.map((item, index) => (
      <motion.a
        key={index}
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 border border-[#ffc95f] rounded-full flex items-center justify-center text-[#ffc95f] text-xl hover:bg-[#ffc95f] hover:text-black transition-all duration-500"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1 * index,
          duration: 0.5,
        }}
      >
        {item.icon}
      </motion.a>
    ))}
  </div>
);

export default Social;
