"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Global Marketing Case Study: Aritzia",
    description:
      "Analyzed Aritzia's global marketing strategies. Proposed actionable solutions to expand its digital presence and influencer collaborations.",
    image: "/assets/projects/aritzia.jpeg",
    live: "/assets/projects/aritzia.pdf", 
    github: null,
  },
  {
    id: "cafes-in-toronto",
    title: "Cafes in Toronto Blog",
    description:
      "Authored a creative blog showcasing Toronto's diverse café culture, blending storytelling with marketing insights to engage readers.",
    image: "/assets/projects/cafes-toronto.jpg",
    live: "https://dishagandhiorg.wordpress.com/2025/02/19/cafes-in-toronto-that-deserves-a-dundie-award/",
    github: null,
  },
  {
    title: "Tableau Dashboard Project",
    description:
      "Designed an interactive Tableau dashboard to analyze key marketing metrics, enabling data-driven decisions for impactful campaigns.",
    image: "/assets/projects/tableau.jpg",
    live: "https://public.tableau.com/app/profile/disha.gandhi4017/vizzes",
    github: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ebcc34] mb-3">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-[#ebcc34] mx-auto mb-6"></div>
          <p className=" max-w-2xl mx-auto">
            A showcase of my work across marketing, content creation, and data analysis
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg h-full"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {project.live ? (
                  <Link
                    href={project.live}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#02fa17] font-medium hover:underline"
                  >
                    View Project <FiExternalLink className="ml-1" />
                  </Link>
                ) : (
                  <span className="text-gray-400 text-sm">
                    Currently not publicly available
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;  