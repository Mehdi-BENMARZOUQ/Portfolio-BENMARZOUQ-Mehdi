import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useState, useRef } from "react";
import { Book, Music, Activity } from "lucide-react";

const interests = {
    reading: [
        {
            cover: "https://m.media-amazon.com/images/I/81wZXiu4OiL._SY466_.jpg",
            title: "The Psychology of Money",
            author: " Morgan Housel",
        },
        {
            cover: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._SY466_.jpg",
            title: "How to Win Friends and Influence People",
            author: "Dale Carnegie",
        },
        {
            cover: "https://m.media-amazon.com/images/I/81fw6oo1OhL._SY425_.jpg",
            title: "أرض زيكولا",
            author: "عمرو عبد الحميد",
        },
    ],
    music: [
        {
            cover: "https://i.ytimg.com/vi/GSmCPlSVgGg/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDXd1TBOcVyIlPu6uHPw6Rl2h8Obw",
            title: "By My Side" ,
            artist: "Qaayel",
            link:"https://www.youtube.com/watch?v=GSmCPlSVgGg"
        },
        {
            cover: "https://i.ytimg.com/vi/Y6-n3JRwmsE/hqdefault.jpg?sqp=-oaymwFBCOADEI4CSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBHefAx5ElMYSpPlBc1r0dtxWVMng",
            title: "3:15 (Breathe)",
            artist: "Russ",
            link:"https://www.youtube.com/watch?v=Y6-n3JRwmsE"
        },
        {
            cover: "https://i.ytimg.com/vi/Rdk3VQrgRSU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCjlAFCA2K5322IT-c6NST8OmxCMQ",
            title: "FEEL (ft.Bury)",
            artist: "Beneld",
            link:"https://youtu.be/Rdk3VQrgRSU?feature=shared"
        },
    ],
    sports: [
        {
            cover: "https://www.health.com/thmb/guaT-jTjqydCKD5PgOoMoVu-8rA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-Swimming-080c78802f384a4687df5a3b13d5611e-3719a8e40a3c4c43a63a4d795e47c505.jpg",
            title: "Swimming",
        },
        {
            cover: "https://miro.medium.com/v2/resize:fit:1400/1*nJNRDZWa7_PlA-bvoPFsZg.png",
            title: "Bodybuilding",
        },
        {
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSs_bwKK_7ZxCjc6quqNa7xSmN8wceKtV2-A&s",
            title: "Football",
        }
    ],
};

export default function BeyondCoding() {
    const [activeTab, setActiveTab] = useState<"reading" | "music" | "sports">("reading");
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: false });
    const isDescriptionInView = useInView(descriptionRef, { once: false });
    const isButtonsInView = useInView(buttonsRef, { once: false });

    return (
        <section id="beyond-coding-section" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                {/* Title Animation */}
                <motion.h2
                    ref={titleRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Beyond Coding
                </motion.h2>

                {/* Description Animation */}
                <motion.p
                    ref={descriptionRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    className="text-xl mb-12 text-center text-gray-600 dark:text-gray-400"
                >
                    Fueling my fire with every chord and every court – here's what keeps me inspired beyond the screen.
                </motion.p>

                {/* Buttons Animation */}
                <motion.div
                    ref={buttonsRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isButtonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                    className="flex justify-center gap-4 mb-12"
                >
                    <motion.button
                        onClick={() => setActiveTab("reading")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full transition-colors ${
                            activeTab === "reading"
                                ? "bg-purple-500 text-white"
                                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
                        }`}
                        style={{ fontSize: "14px" }}
                    >
                        <Book size={14} />
                        <span>Reading</span>
                    </motion.button>
                    <motion.button
                        onClick={() => setActiveTab("music")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full transition-colors ${
                            activeTab === "music"
                                ? "bg-purple-500 text-white"
                                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
                        }`}
                        style={{ fontSize: "14px" }}
                    >
                        <Music size={14} />
                        <span>Music</span>
                    </motion.button>
                    <motion.button
                        onClick={() => setActiveTab("sports")}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full transition-colors ${
                            activeTab === "sports"
                                ? "bg-purple-500 text-white"
                                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
                        }`}
                        style={{ fontSize: "14px" }}
                    >
                        <Activity size={14} />
                        <span>Sports</span>
                    </motion.button>
                </motion.div>

                {/* Card List with Transition Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        {interests[activeTab].map((item, index) => (
                            <Card key={index} item={item} type={activeTab} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

function Card({ item, type, index }: { item: any; type: "reading" | "music" | "sports"; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            style={{ maxWidth: "90%", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px auto" }}
            className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[62%] xl:w-[62%] 2xl:w-[62%] group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
        >
            {/* Image */}
            <motion.div
                className="w-16 h-16 rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.1 }}
            >
                <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </motion.div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {type === "reading" && item.author}
                    {type === "music" && item.artist}
                    {type === "sports" && item.title}
                </p>
            </div>

            {/* Icon */}
            {type === "music" && (
                <motion.div
                    className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z"></path>
                        </svg>
                    </a>
                </motion.div>
            )}
        </motion.div>
    );
}