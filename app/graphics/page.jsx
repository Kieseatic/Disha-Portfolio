"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";
import {
  BsCalendarEvent,
  BsTree,
  BsPalette,
  BsMegaphone,
  BsFileEarmarkText,
} from "react-icons/bs";

const graphics = [
  {
    title: "Event Agenda",
    description:
      "A professionally designed event agenda template for organizing and presenting event schedules.",
    file: "/assets/Event Agenda.pdf",
    icon: BsCalendarEvent,
    gradient: "from-[#a855f7] to-[#6d28d9]",
  },
  {
    title: "Outdoor Event",
    description:
      "A creative outdoor event template capturing the essence of open-air gatherings and activities.",
    file: "/assets/Outdoor Event.pdf",
    icon: BsTree,
    gradient: "from-[#22c55e] to-[#15803d]",
  },
  {
    title: "Random",
    description:
      "A versatile graphic design template showcasing creative layout and visual storytelling.",
    file: "/assets/Random.pdf",
    icon: BsPalette,
    gradient: "from-[#ec4899] to-[#be185d]",
  },
  {
    title: "Speakers Agenda",
    description:
      "A structured speakers agenda template for managing speaker lineups and session details.",
    file: "/assets/Speakers Agenda.pdf",
    icon: BsFileEarmarkText,
    gradient: "from-[#3b82f6] to-[#1d4ed8]",
  },
  {
    title: "Speakers Announcement",
    description:
      "A bold speakers announcement template designed to highlight and promote featured speakers.",
    file: "/assets/Speakers Announcement.pdf",
    icon: BsMegaphone,
    gradient: "from-[#f97316] to-[#c2410c]",
  },
];

const Graphics = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] py-12"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffc95f] mb-4">
            Graphics & Templates
          </h2>
          <div className="w-24 h-1 bg-[#ffc95f] mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-white/70 text-lg">
            A collection of graphic designs and templates crafted for events,
            announcements, and creative projects
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {graphics.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl overflow-hidden cursor-default"
              >
                {/* Gradient top section */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full" />
                    <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full" />
                  </div>

                  {/* Icon */}
                  <Icon className="text-white text-7xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 drop-shadow-lg" />

                  {/* Hover overlay with actions */}
                  <div
                    className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-3 hover:bg-white/40 transition-colors"
                      title="Preview"
                    >
                      <FiEye className="text-xl" />
                    </a>
                    <a
                      href={item.file}
                      download
                      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-3 hover:bg-white/40 transition-colors"
                      title="Download"
                    >
                      <FiDownload className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-[#1a1a2e] border border-white/5 border-t-0 rounded-b-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffc95f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-5 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.file}
                    download
                    className="inline-flex items-center gap-2 bg-[#ffc95f] text-black font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#ffb82e] transition-colors"
                  >
                    <FiDownload className="text-base" />
                    Download PDF
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Graphics;
