import { motion } from "framer-motion";
import React from "react";

const journeyItems = [
    {
        year: "July 2024 - September 2024",
        type: "Work",
        title: "Full-Stack Java & Angular Developer Intern – BCP (Banque Centrale Populaire), Marrakech",
        description: "Incident Management System",
    },
    {
        year: "2023 - Present",
        type: "Study",
        title: "State Engineer Degree",
        description: "Faculty of Sciences and Technology, Marrakech - Network and Information Systems Engineering (IRSI)",
    },
    {
        year: "April 2023 - June 2023",
        type: "Work",
        title: "Full-Stack PHP Developer Intern – Wilaya, Marrakech",
        description: "Public Procurement Tracking Application",
    },
    {
        year: "2022 - 2023",
        type: "Study",
        title: "Professional Bachelor's Degree",
        description: "Faculty of Sciences and Technology, Marrakech - Distributed Information Systems",
    },
    {
        year: "2020 - 2022",
        type: "Study",
        title: "Preparatory Cycle DEUST",
        description: "Faculty of Sciences and Technology, Marrakech - Mathematics, Computer Science, Physics, and Chemistry (MIPC)",
    },
];

export default function Journey() {
    return (
        <section id="experience-section" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
                <p className="text-xl mb-12 text-center">Education and Work Experience</p>
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <TimelineLine items={journeyItems} />
                        {journeyItems.map((item, index) => (
                            <JourneyItem key={index} {...item} isEven={index % 2 === 0} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineLine({ items }: { items: any[] }) {
    return (
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" style={{ opacity: "0" }}></div>
            {items.map((_, index) => (
                <div key={index} className="absolute left-1/2 -translate-x-1/2 w-3 h-3" style={{ top: `${(index + 0.5) * (100 / items.length)}%` }}>
                    <div className="w-full h-full rounded-full bg-blue-400 dark:bg-blue-500 shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30"></div>
                    <div className="absolute inset-0 rounded-full bg-blue-400 dark:bg-blue-500 blur-sm"></div>
                </div>
            ))}
        </div>
    );
}

function JourneyItem({ year, title, description, type, isEven }: { year: string; title: string; description: string; type: string; isEven: boolean }) {
    const Icon = type === "Study" ? GraduationCapIcon : BriefcaseIcon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="mb-8 flex flex-col md:flex-row items-start md:items-center"
        >
            {/* Left Card (Even Index) */}
            {isEven ? (
                <>
                    <div className="flex-grow order-1 md:order-1 md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                        <Card title={title} year={year} description={description} />
                    </div>
                    <div className="order-0 md:order-2 md:w-8 md:mx-auto flex items-center justify-center">
                        <Icon />
                    </div>
                    <div className="flex-grow order-1 md:order-3 md:w-1/2 pl-12 md:pl-8"></div>
                </>
            ) : (
                <>
                    {/* Right Card (Odd Index) */}
                    <div className="flex-grow order-1 md:order-3 md:w-1/2 pl-12 md:pl-8">
                        <Card title={title} year={year} description={description} />
                    </div>
                    <div className="order-0 md:order-2 md:w-8 md:mx-auto flex items-center justify-center">
                        <Icon />
                    </div>
                    <div className="flex-grow order-1 md:order-1 md:w-1/2 pl-12 md:pl-0 md:pr-8"></div>
                </>
            )}
        </motion.div>
    );
}

function Card({ title, year, description }: { title: string; year: string; description: string }) {
    return (
        <div className="relative bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md group">
            <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.05),transparent_50%)]"></div>
                <div className="absolute inset-0" style={{ opacity: "1", transform: "none" }}>
                    <div className="absolute inset-0 rounded-lg" style={{ background: "linear-gradient(132.648deg, transparent 0%, rgba(100, 150, 255, 0.1) 50%, transparent 100%)" }}></div>
                </div>
            </div>
            <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-semibold dark:text-white mb-1">{title}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">{year}</p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3">{description}</p>
            </div>
        </div>
    );
}

function GraduationCapIcon() {
    return (
        <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-4 w-4 text-white">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
        </div>
    );
}

function BriefcaseIcon() {
    return (
        <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-4 w-4 text-white">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
        </div>
    );
}