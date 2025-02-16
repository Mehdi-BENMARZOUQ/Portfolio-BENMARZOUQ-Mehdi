"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import CreativeWork from "./components/CreativeWork"
import FeaturedProjects from "./components/FeaturedProjects"
import Journey from "./components/Journey"
import BeyondCoding from "./components/BeyondCoding"
import Footer from "./components/Footer"
import Dockbar from "./components/Dockbar"
import '../styles/globals.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <HeroSection />
          <CreativeWork />
          <FeaturedProjects />
          <Journey />
          <BeyondCoding />
          <Footer />
        </motion.main>
       {/* <Dockbar />*/}
      </div>
    </div>
  )
}

