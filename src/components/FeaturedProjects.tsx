import { motion, useInView } from "framer-motion";
import type React from "react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import chatApplication from "@/public/projects-img/projects-photos/chatApplication.png";
import photoManagement from "@/public/projects-img/projects-photos/photoManagerProject.png";
import FSTWebsite from "@/public/projects-img/fstg_website.png";
import EventManagement from "@/public/projects-img/event_management.png";

const projects = [
  {
    title: "Real-time messaging application",
    description: "A software platform enabling instant text, Image, or video communication between users.",
    image: chatApplication,
    technologies: ["Node.js/Express", "React.js", "MongoDB", "Tailwind CSS", "Daisy UI", "Zustand"],
  },
  {
    title: "Photo organization system based on facial recognition using AI",
    description: "A photo organization system using facial recognition automates image tagging and grouping based on identified individuals.",
    image: photoManagement,
    technologies: ["Node.js/Express", "React.js", "MinIO", "Python/OpenCV", "PostgreSQL"],
  },
  {
    title: "FST Marrakech Website",
    description: "Developed with Laravel and ReactJS, this application allows students to check their grades while empowering administrators to manage updates.",
    image: FSTWebsite,
    technologies: ["Laravel", "ReactJS"],
  },
  {
    title: "Event Management Website",
    description: "Built with Laravel and ReactJS, this application manages event registrations and ticket sales.",
    image: EventManagement,
    technologies: ["Laravel", "ReactJS"],
  },
];

export default function FeaturedProjects() {
  return (
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <p className="text-xl mb-12 text-center text-gray-600 dark:text-gray-400">
            Explore some of my recent work and personal projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
  );
}

function ProjectCard({
                       title,
                       description,
                       image,
                       technologies,
                       index,
                     }: {
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  index: number;
}) {
  const ref = useRef(null); // Ref for the element to track
  const isInView = useInView(ref, { once: false }); // Track if the element is in view

  return (
      <motion.div
          id="projects-section"
          ref={ref}
          initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }} // Staggered delay based on index
          className="project-section relative h-[400px] rounded-2xl overflow-hidden group"
      >
        <div className="absolute inset-0">
          {typeof image === "string" ? (
              <img
                  src={image}
                  loading="lazy"
                  alt="Portfolio project image"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 blur-sm"
              />
          ) : (
              <Image
                  src={image}
                  alt="Portfolio project image"
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-700 blur-sm"
              />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial state for the content
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate when in view
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }} // Staggered delay for content
              className="bg-white/10 backdrop-blur-md dark:bg-gray-900/60 rounded-xl p-6 transform transition-all duration-300 group-hover:translate-y-0 translate-y-2"
          >
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {/*<p className="text-gray-200 text-sm mb-4 line-clamp-2">{description}</p>*/}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                  <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm dark:bg-gray-800/50 dark:text-gray-300"
                  >
                {tech}
              </span>
              ))}
            </div>
            <a
                href="#"
                aria-label="Visit Project"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white/90 hover:text-white text-sm hover:underline transition-colors"
            >
              Visit Project
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link w-4 h-4"
              >
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
  );
}