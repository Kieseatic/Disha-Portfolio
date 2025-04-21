"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
// Icons
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineRobot } from "react-icons/ai";
import { FaWordpress, FaFigma, FaMailchimp, FaMicrosoft, FaInstagram, FaFacebook, FaGoogle, FaSearchengin, FaVideo } from "react-icons/fa";
import { SiOpenai, SiAdobephotoshop, SiCanva, SiGoogleanalytics, SiTableau, SiHubspot, SiAdobeillustrator, SiMicrosoft, SiSalesforce, SiGoogleads } from "react-icons/si";
import { MdCampaign, MdOutlineAnalytics, MdEmail, MdOutlineGroupWork } from "react-icons/md";
import { BsGraphUp, BsCalendarCheck } from "react-icons/bs";
import { TbSeo, TbReportAnalytics } from "react-icons/tb";

// components
import { ScrollArea } from "../../components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

// about data (unchanged)
const about = {
  title: "About me",
  description:
    "Driven by creativity and innovation, I am passionate about leveraging marketing strategies to build meaningful connections between brands and their audiences. With a strong foundation in social media marketing, I thrive on creating engaging campaigns that inspire, influence, and deliver measurable results. I believe in the power of communication to bridge gaps, spark positive change, and help businesses achieve their goals.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Disha Gandhi",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    /*{
      fieldName: "Phone",
      fieldValue: "(+1) 416 832 8955",
    },
    {
      fieldName: "Email",
      fieldValue: "dishamgandhi.30@gmail.com",
    },*/
    {
      fieldName: "Location",
      fieldValue: "Toronto, Ontario, Canada",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Hindi, Gujarati",
    },
  ],
};

// Updated skills data with tools integrated in categories
const skills = {
  title: "My skills",
  description:
    "Driven by creativity and market insight, I'm a dedicated marketing strategist who thrives on turning innovative ideas into impactful brand experiences. From crafting compelling campaigns to architecting comprehensive digital strategies, I believe in the power of marketing to captivate audiences and drive measurable results. Let's innovate together—shaping the future of brands, one campaign at a time.",
  categories: [
    {
      name: "Digital Marketing & Demand Generation",
      icon: <MdCampaign />,
      skills: [
        { name: "Multi-Channel Campaigns", icon: <BsGraphUp /> },
        { name: "Lead Acquisition & Nurturing", icon: <SiHubspot /> },
        { name: "Performance Analytics", icon: <SiGoogleanalytics /> },
      ],
      tools: [
        { name: "HubSpot", icon: <SiHubspot /> },
        { name: "Salesforce", icon: <SiSalesforce /> },
        { name: "Google Analytics", icon: <SiGoogleanalytics /> },
      ]
    },
    {
      name: "Content Creation & Social Media",
      icon: <FaInstagram />,
      skills: [
        { name: "High-Engagement Content", icon: <FaFacebook /> },
        { name: "Community Engagement", icon: <MdOutlineGroupWork /> },
        { name: "Graphic Design & Video Editing", icon: <SiCanva /> },
      ],
      tools: [
        { name: "Instagram", icon: <FaInstagram /> },
        { name: "Facebook", icon: <FaFacebook /> },
        { name: "Canva", icon: <SiCanva /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "CapCut", icon: <FaVideo /> },
      ]
    },
    {
      name: "Paid Advertising & SEO",
      icon: <SiGoogleads />,
      skills: [
        { name: "Google Ads Campaigns", icon: <FaGoogle /> },
        { name: "SEO & Keyword Research", icon: <TbSeo /> },
        { name: "Ad Performance Tracking", icon: <MdOutlineAnalytics /> },
      ],
      tools: [
        { name: "Google Ads", icon: <SiGoogleads /> },
        { name: "SEO", icon: <FaSearchengin /> },
      ]
    },
    {
      name: "Data Analysis & Technical Proficiency",
      icon: <TbReportAnalytics />,
      skills: [
        { name: "KPI Tracking & Reporting", icon: <SiTableau /> },
        { name: "Marketing Automation", icon: <SiHubspot /> },
        { name: "A/B Testing & Optimization", icon: <MdOutlineAnalytics /> },
      ],
      tools: [
        { name: "Tableau", icon: <SiTableau /> },
        { name: "Google Analytics", icon: <SiGoogleanalytics /> },
      ]
    },
    {
      name: "Project Management & Collaboration",
      icon: <BsCalendarCheck />,
      skills: [
        { name: "Campaign Coordination", icon: <MdCampaign /> },
        { name: "Team Leadership", icon: <MdOutlineGroupWork /> },
        { name: "Content Management", icon: <FaMailchimp /> },
      ],
      tools: [
        { name: "Microsoft Office", icon: <SiMicrosoft /> },
      ]
    },
  ]
};

// experience data (unchanged)
const experience = {
  icon: "/assets/about/badge.svg",
  title: "My experience",
  description:
    "Creative and detail-oriented marketing professional with expertise in digital marketing, social media management, and brand building.",
  items: [
    {
      position: "Marketing Intern at Ontario College of Management and Technology",
      duration: "2024 - 2025",
      description: "Toronto, Ontario, Canada",
    },
    {
      position: "Social Media Coordinator / Beauty Expert at Shoppers Drug Mart",
      duration: "2023 - Present",
      description: "Toronto, Ontario, Canada",
    },
  ],
};

// education data (unchanged)
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Strong academic foundation in business marketing, complemented by industry-recognized certifications.",
  items: [
    {
      institution: "Seneca College",
      degree: "Diploma in Business Marketing",
      duration: "Jan 2022 - August 2024",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] xl:h-[582px]"
        >
          <TabsList className="flex flex-col items-start w-full max-w-[200px] xl:mr-[40px] gap-6">
            <TabsTrigger
              value="about"
              className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-black bg-[#ffc95f] border-2 border-[#ffc95f] rounded-xl hover:bg-[#ffb82e] hover:text-black transition-all flex-none"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-black bg-[#ffc95f] border-2 border-[#ffc95f] rounded-xl hover:bg-[#ffb82e] hover:text-black transition-all flex-none"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-black bg-[#ffc95f] border-2 border-[#ffc95f] rounded-xl hover:bg-[#ffb82e] hover:text-black transition-all flex-none"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-black bg-[#ffc95f] border-2 border-[#ffc95f] rounded-xl hover:bg-[#ffb82e] hover:text-black transition-all flex-none"
            >
              Education
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="w-full min-h-[25vh]">
            {/* About Tab */}
            <TabsContent value="about" className="w-full">
              <div className="pt-2">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="h3">{about.title}</h3>
                    <p className="p">{about.description}</p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                      {about.info.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#ffc95f] h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-black font-medium uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-base uppercase text-black/80">
                            {item.fieldValue}
                          </h3>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            {/* Skills Tab - Updated with integrated tools */}
            <TabsContent value="skills" className="w-full">
              <div className="pt-2">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="h3">{skills.title}</h3>
                    <p className="p">{skills.description}</p>
                  </div>
                  
                  <ScrollArea className="h-[400px]">
                    <div className="grid grid-cols-1 gap-6">
                      {skills.categories.map((category, index) => (
                        <div key={index} className="bg-[#ffc95f] rounded-xl p-5 shadow-md">
                          <div className="mb-4 flex items-center gap-2">
                            <span className="text-2xl text-black">{category.icon}</span>
                            <h4 className="font-bold text-black">{category.name}</h4>
                          </div>
                          
                          {/* Skills */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-black/80 mb-2">Key Competencies:</h5>
                            <ul className="space-y-2 pl-2">
                              {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-center gap-2">
                                  <span className="text-black/80 text-lg">{skill.icon}</span>
                                  <span className="text-sm text-black/80">{skill.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Tools */}
                          <div>
                            <h5 className="text-sm font-semibold text-black/80 mb-2">Tools & Platforms:</h5>
                            <div className="flex flex-wrap gap-2">
                              {category.tools.map((tool, toolIndex) => (
                                <div 
                                  key={toolIndex} 
                                  className="bg-black/10 px-3 py-1 rounded-full flex items-center gap-1"
                                >
                                  <span className="text-black text-sm">{tool.icon}</span>
                                  <span className="text-xs text-black/80">{tool.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="pt-2">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex flex-col gap-2">
                    <h4 className="h3">{experience.title}</h4>
                    <p className="p">{experience.description}</p>
                  </div>
                  <ul className="flex flex-col gap-6">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="relative bg-[#ffc95f] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-[800px]"
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex justify-between items-center">
                            <h4 className="text-[16px] font-bold text-black leading-tight">
                              {item.position}
                            </h4>
                            <span className="text-sm text-black/70">
                              {item.duration}
                            </span>
                          </div>
                          <p className="text-sm text-black/80">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="pt-2">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex flex-col gap-2">
                    <h3 className="h3">{education.title}</h3>
                    <p className="p">{education.description}</p>
                  </div>
                  <ul className="flex flex-col gap-6">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="relative bg-[#ffc95f] border-2 border-[#ffc95f] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex flex-col gap-2">
                          <h4 className="text-lg font-bold text-black">
                            {item.institution}
                          </h4>
                          <span className="text-sm text-black/70">
                            {item.duration}
                          </span>
                          <p className="text-sm text-black/80">{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;