"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, Battery, BatteryCharging, Calendar } from "lucide-react"
import { motion } from "framer-motion"

interface NavbarProps {
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [batteryLevel, setBatteryLevel] = useState<number | null>(null)
    const [isCharging, setIsCharging] = useState<boolean | null>(null)

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if ("getBattery" in navigator) {
            (navigator as any).getBattery().then((battery: any) => {
                setBatteryLevel(battery.level * 100)
                setIsCharging(battery.charging)
                battery.addEventListener("levelchange", () => {
                    setBatteryLevel(battery.level * 100)
                })
                battery.addEventListener("chargingchange", () => {
                    setIsCharging(battery.charging)
                })
            })
        }
    }, [])

    return (
        <nav className="fixed top-3 left-0 right-0 z-50 flex flex-col md:flex-row md:justify-between mx-4">
            <div className="h-12 container mx-auto px-4 py-2 flex justify-between items-center border-[1.5px] border-[#ffffff1a] dark:border-[#ffffff1a] bg-transparent backdrop-blur-md mb-2 md:mb-0 shadow-lg" style={{maxWidth:"47rem",borderRadius:"50px"}}>
                <ul className="mx-2 flex space-x-4">
                    <li><button className="text-sm font-bold hover:text-gray-500" onClick={() => document.getElementById('home-section')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                    <li><button className="text-sm font-bold hover:text-gray-500" onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                    <li><button className="text-sm font-bold hover:text-gray-500" onClick={() => document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' })}>Experience</button></li>
                    <li><button className="text-sm font-bold hover:text-gray-500" onClick={() => document.getElementById('beyond-coding-section')?.scrollIntoView({ behavior: 'smooth' })}>Beyond Coding</button></li>
                    {/*<li><button className="text-sm font-bold hover:text-gray-500">Contact</button></li>*/}
                </ul>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    style={{color:"rgb(250 204 21 / var(--tw-text-opacity, 1))"}}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: darkMode ? 180 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </motion.div>
                </button>
            </div>
            <div className="flex items-center space-x-4 border-[1.5px] border-[#ffffff1a] dark:border-[#ffffff1a] bg-transparent backdrop-blur-md shadow-lg h-8" style={{padding:"0 17px",borderRadius:"50px"}}>
                <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">{currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
                {batteryLevel !== null && (
                    <div className="flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded">
                        {isCharging ? <BatteryCharging className="w-4 h-4" /> : <Battery className="w-4 h-4" />}
                        <span className="text-xs">{Math.round(batteryLevel)}%</span>
                    </div>
                )}
            </div>
        </nav>
    )
}