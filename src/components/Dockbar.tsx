import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { FileText, Code, Briefcase, X, Minus, Maximize2 } from "lucide-react"

import myCV from "@/public/pdf/Mehdi_BENMARZOUQ_CV_fr_PFA.pdf";
import { dockItems } from "../data/dockItems";
import { skillCategories } from "../data/skillCategories";
import { projects } from "../data/projects";
import { WindowId, WindowPosition, WindowState, WindowRef } from "../types/windowTypes";


export default function Dockbar() {
    const [activeWindow, setActiveWindow] = useState<WindowId | null>(null)
    const [windowPositions, setWindowPositions] = useState<Record<WindowId, WindowPosition>>({
        "Resume": { x: 100, y: 100, width: 500, height: 600 },
        "Skills": { x: 150, y: 120, width: 400, height: 500 },
        "Projects": { x: 200, y: 140, width: 600, height: 500 }
    })
    const [windowStates, setWindowStates] = useState<Record<WindowId, WindowState>>({
        "Resume": { minimized: false, maximized: false },
        "Skills": { minimized: false, maximized: false },
        "Projects": { minimized: false, maximized: false }
    })
    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState(1)
    const dragOriginRef = useRef({ x: 0, y: 0 })
    const [openWindows, setOpenWindows] = useState<WindowId[]>([])
    const [activeZIndex, setActiveZIndex] = useState(10)
    const windowRefs = useRef<Record<WindowId, WindowRef>>({
        "Resume": { zIndex: 10 },
        "Skills": { zIndex: 11 },
        "Projects": { zIndex: 12 }
    })

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
        setPageNumber(1) // Reset to first page when loading new document
    }

    const handleMinimize = (window: WindowId) => {
        setWindowStates(prev => ({
            ...prev,
            [window]: { ...prev[window], minimized: !prev[window].minimized }
        }))
    }

    const handleMaximize = (window: WindowId) => {
        setWindowStates(prev => ({
            ...prev,
            [window]: { ...prev[window], maximized: !prev[window].maximized }
        }))
    }

    const handleWindowClick = (window: WindowId) => {
        // Bring window to front by increasing z-index
        const newZIndex = activeZIndex + 1
        windowRefs.current[window].zIndex = newZIndex
        setActiveZIndex(newZIndex)
        setActiveWindow(window)
    }

    const handleDragStart = (event: MouseEvent | TouchEvent | PointerEvent, window: WindowId) => {
        // Store the initial position
        if (event instanceof MouseEvent) {
            dragOriginRef.current = { x: event.clientX, y: event.clientY }
        } else if (event instanceof TouchEvent) {
            dragOriginRef.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }
        }
        // Update active window and z-index when starting drag
        handleWindowClick(window)
    }

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, window: WindowId) => {
        setWindowPositions(prev => ({
            ...prev,
            [window]: {
                ...prev[window],
                x: prev[window].x + info.point.x - dragOriginRef.current.x,
                y: prev[window].y + info.point.y - dragOriginRef.current.y
            }
        }))
        // Update the drag origin for next drag
        dragOriginRef.current = { x: info.point.x, y: info.point.y }
    }

    const openWindow = (title: WindowId) => {
        if (windowStates[title].minimized) {
            setWindowStates(prev => ({
                ...prev,
                [title]: { ...prev[title], minimized: false }
            }));
        }
        // Add to open windows if not already open
        if (!openWindows.includes(title)) {
            setOpenWindows(prev => [...prev, title])
        }
        // Set as active window and bring to front
        handleWindowClick(title)
    }

    const closeWindow = (title: WindowId) => {
        setOpenWindows(prev => prev.filter(window => window !== title))
        // Set another window as active if there are any open
        if (openWindows.length > 1) {
            const newActive = openWindows.find(window => window !== title)
            if (newActive) setActiveWindow(newActive)
        } else {
            setActiveWindow(null)
        }
    }

    const changePage = (offset: number) => {
        setPageNumber(prevPageNumber => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1));
    }

    const getTagColor = (tag: string) => {
        const colors: { [key: string]: string } = {
            "React.js": "bg-blue-100 text-blue-800",
            "Angular": "bg-red-100 text-red-800",
            "HTML": "bg-orange-100 text-orange-800",
            "CSS": "bg-pink-100 text-pink-800",
            "Tailwind CSS": "bg-cyan-100 text-cyan-800",
            "Daisy UI": "bg-blue-200 text-blue-900",
            "Bootstrap": "bg-purple-100 text-purple-800",
            "Node.js/Express": "bg-green-100 text-green-800",
            "Laravel": "bg-red-200 text-red-900",
            "SpringBoot": "bg-green-200 text-green-900",
            "PHP": "bg-indigo-100 text-indigo-800",
            "MongoDB": "bg-green-300 text-green-900",
            "PostgreSQL": "bg-blue-300 text-blue-900",
            "MinIO": "bg-yellow-100 text-yellow-800",
            "Python/OpenCV": "bg-yellow-200 text-yellow-900",
            "Zustand": "bg-teal-100 text-teal-800",
            "Node.js": "bg-green-100 text-green-800",
            "Python": "bg-yellow-200 text-yellow-900",
        }
        return colors[tag] || "bg-gray-100 text-gray-800"
    }

    return (
        <>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                style={{ zIndex: 9999 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg px-4 py-2"
            >
                <div className="flex space-x-4">
                    {dockItems.map((item, index) => (
                        <DockIcon key={index} {...item} isActive={openWindows.includes(item.title)} onClick={() => openWindow(item.title)} />
                    ))}
                </div>
            </motion.div>

            <AnimatePresence>
                {openWindows.map(window => {
                    const position = windowPositions[window]
                    const state = windowStates[window]

                    // Don't render if minimized
                    if (state.minimized) return null

                    const getWindowStyle = () => {
                        if (state.maximized) {
                            return {
                                position: 'fixed',
                                left: 0,
                                top: "80px",
                                width: '100vw',
                                height: 'calc(100vh - 100px)',
                                zIndex: windowRefs.current[window].zIndex
                            } as React.CSSProperties
                        }
                        return {
                            position: 'fixed',
                            left: position.x,
                            top: position.y,
                            width: position.width,
                            height: position.height,
                            zIndex: windowRefs.current[window].zIndex
                        } as React.CSSProperties
                    }

                    return (
                        <motion.div
                            key={window}
                            drag={!state.maximized}
                            dragMomentum={false}
                            onDragStart={(e) => handleDragStart(e, window)}
                            onDragEnd={(e, info) => handleDragEnd(e, info, window)}
                            onClick={() => handleWindowClick(window)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", damping: 20 }}
                            style={getWindowStyle()}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                            {/* macOS-style window controls */}
                            <div className="flex items-center justify-between p-2 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700">
                                <div className="flex space-x-2">
                                    <motion.button
                                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            closeWindow(window)
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="w-2 h-2 text-red-800 opacity-0 group-hover:opacity-100" />
                                    </motion.button>
                                    <motion.button
                                        className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleMinimize(window)
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Minus className="w-2 h-2 text-yellow-800 opacity-0 group-hover:opacity-100" />
                                    </motion.button>
                                    {/* todo: Fix the maximize problem    */}
                                   {/* <motion.button
                                        className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleMaximize(window)
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Maximize2 className="w-2 h-2 text-green-800 opacity-0 group-hover:opacity-100" />
                                    </motion.button>*/}
                                </div>
                                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {window}
                                </h3>
                                <div className="w-12"></div> {/* Spacer for flex alignment */}
                            </div>

                            {/* Window content with proper max-height for scrolling */}
                            <div className="p-4 overflow-auto" style={{ maxHeight: state.maximized ? 'calc(100vh - 140px)' : (position.height - 40),height:"100%" }}>
                                {window === "Resume" && (
                                    <div className="w-full h-full">
                                        <iframe
                                            src={myCV}
                                            width="100%"
                                            height="100%"
                                            className="border-0"
                                            loading="lazy"
                                        />
                                    </div>
                                )}

                                {window === "Skills" && (
                                    <div className="space-y-8" style={{height:"400px"}}>
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h2>

                                        {skillCategories.map((category) => (
                                            <div key={category.name} className="space-y-4">
                                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 border-b pb-2">
                                                    {category.name}
                                                </h3>

                                                <div className="space-y-3">
                                                    {category.skills.map((skill, index) => (
                                                        <div key={index} className="space-y-1">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex items-center">
                                                                    <div className="w-6 h-6 mr-2 bg-gray-200 rounded-full">
                                                                        <img
                                                                            src={typeof skill.logo === "string" ? skill.logo : skill.logo.src}
                                                                            alt={skill.name}
                                                                            className="w-6 h-6 rounded-full p-1"
                                                                            style={{color:"#61DAFB"}}
                                                                        />
                                                                    </div>
                                                                    <span className="font-medium text-gray-800 dark:text-white">
                                                                        {skill.name}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {window === "Projects" && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
                                        <div className="grid grid-cols-1 gap-6">
                                            {projects.map((project, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-600"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    whileHover={{ y: -5 }}
                                                >
                                                    <img
                                                        src={typeof project.image === "string" ? project.image : project.image.src}
                                                        alt={project.title}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                    <div className="p-4">
                                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>

                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {project.tags.map((tag, tagIndex) => (
                                                                <span key={tagIndex} className={`px-2 py-1 text-xs rounded-full ${getTagColor(tag)}`}>
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <a
                                                            href={project.repo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
                                                        >
                                                            <Code className="w-4 h-4 mr-1" />
                                                            View on GitHub
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </>
    )
}

interface DockIconProps {
    icon: React.ReactNode;
    title: WindowId;
    onClick: () => void;
    isActive: boolean;
}

function DockIcon({ icon, title, onClick, isActive }: DockIconProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-300/80 dark:hover:bg-gray-600/80'} backdrop-blur-sm transition-colors relative`}
            onClick={onClick}
        >
            {icon}
            {isActive && (
                <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                    layoutId="dock-indicator"
                />
            )}
            <motion.span
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity pointer-events-none"
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            >
                {title}
            </motion.span>
        </motion.button>
    )
}