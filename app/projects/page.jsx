"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Resume and Interview Analysis AI app",
    description:
      "A cutting-edge platform to streamline hiring processes by automating interview analysis and resume-job matching using AI-powered tools.",
    stack: [
      { name: "OpenAI" },
      { name: "RAG" },
      { name: "Flask" },
      { name: "React.js" },
    ],
    image: "/assets/projects/Prj1.jpg",
    live: "https://github.com/Kieseatic/Resume-and-Interview-analysis",
    github: "https://github.com/Kieseatic/Resume-and-Interview-analysis",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Accessories Shopping Web Application",
    description:
      "An E-commerce platform that sells various accessories, providing a seamless shopping experience for customers.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "React-js" }],
    image: "/assets/projects/Prj2.jpg",
    live: "https://github.com/Kieseatic/React-Shopping-Website",
    github: "https://github.com/Kieseatic/React-Shopping-Website",
  },
  {
    num: "03",
    category: "Software Testing ",
    title: "Delivery Management System",
    description:
      "The Delivery Management System is an advanced software solution designed to optimize the logistics of truck deliveries. ",
    stack: [{ name: "C++" }, { name: "Python" }, { name: "Jenkins" }],
    image: "/assets/projects/Prj3.jpg",
    live: "https://github.com/Kieseatic/Delivery-Management-System",
    github: "https://github.com/Kieseatic/Delivery-Management-System",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[50vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-secondary transition-all duration-300 h-[250px] hover:h-[350px]"
            >
              {/* Image */}
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover"
                />
              </div>

              {/* Expanded Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[40px] h-[40px] rounded-full bg-white/10 flex justify-center items-center transition-transform duration-300 hover:scale-110">
                      <BsArrowUpRight className="text-white text-xl" />
                    </div>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-[40px] h-[40px] rounded-full bg-white/10 flex justify-center items-center transition-transform duration-300 hover:scale-110">
                      <BsGithub className="text-white text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
