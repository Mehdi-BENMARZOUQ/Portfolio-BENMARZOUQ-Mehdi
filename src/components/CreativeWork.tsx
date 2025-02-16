import React from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Zap, Smartphone, Layout } from "lucide-react";
import { useRef } from "react";

const skills = [
    { icon: <Layout />, title: "Interactive UI", description: "Engaging interfaces with smooth animations" },
    { icon: <Palette />, title: "Creative Design", description: "Modern, unique, and aesthetic designs" },
    { icon: <Zap />, title: "Animations", description: "Captivating motion effects" },
    { icon: <Smartphone />, title: "Responsive", description: "Fully optimized for all devices" },
];

export default function CreativeWork() {
    return (
        <section className=" py-20 bg-white dark:bg-gray-900">

            <div className="container  mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-center">Creative Work</h2>
                <p className="text-xl mb-12 text-center text-gray-600 dark:text-gray-400">
                    Bringing ideas to life through innovative design and seamless interactions
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Adjusted gap and columns */}
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCard({ icon, title, description, index }: { icon: React.ReactNode; title: string; description: string; index: number }) {
    const ref = useRef(null); // Ref for the element to track
    const isInView = useInView(ref, { once: false }); // Track if the element is in view

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }} // Staggered delay based on index
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Hover effect
            className="p-4 bg-transparent rounded-lg flex flex-col items-center cursor-pointer"
        >
            {/* Icon with bouncy animation */}
            <motion.div
                className="text-4xl mb-4 text-indigo-500 dark:text-indigo-400"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, rotate: 10 }} // Hover effect for the icon
            >
                {React.cloneElement(icon as React.ReactElement, { width: "40px", height: "40px" })} {/* Adjusted icon size */}
            </motion.div>

            {/* Text with staggered animation */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }} // Staggered delay for text
                className="text-center"
            >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3> {/* Adjusted font size */}
                <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p> {/* Adjusted font size */}
            </motion.div>
        </motion.div>
    );
}