import { motion, useInView } from "framer-motion";
import type React from "react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import Image1 from "@/public/projects-img/en_cours.jpg";
import Image2 from "@/public/projects-img/event_management.png";
import Image3 from "@/public/projects-img/incident_managment.png";
import Image4 from "@/public/projects-img/Public_procurement.png";

const projects = [
  {
    title: "FST Marrakech Website",
    description: "Developed with Laravel and ReactJS, this application allows students to check their grades while empowering administrators to manage updates.",
    image: Image1,
    technologies: ["Laravel", "ReactJS"],
  },
  {
    title: "Event Management Website",
    description: "Built with Laravel and ReactJS, this application manages event registrations and ticket sales.",
    image: Image2,
    technologies: ["Laravel", "ReactJS"],
  },
  {
    title: "Incident Management System",
    description: "A robust incident management system developed with Spring Boot and Angular, enabling efficient tracking and resolution of incidents impacting the bank's operations.",
    image: Image3,
    technologies: ["SpringBoot", "Angular"],
  },
  {
    title: "Public Procurement Tracking Application",
    description: "A public procurement tracking application developed with Laravel, PHP, HTML, CSS, and Bootstrap, enabling transparent and efficient management of the procurement process.",
    image: Image4,
    technologies: ["Laravel", "Html", "CSS", "Bootstrap"],
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
            <p className="text-gray-200 text-sm mb-4 line-clamp-2">{description}</p>
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