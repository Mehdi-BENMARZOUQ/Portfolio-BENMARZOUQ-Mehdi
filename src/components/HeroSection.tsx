"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Phone } from "lucide-react"
import BlurText from "@/src/reactbits/BlurText"
import ShinyText from "@/src/reactbits/ShinyText"
import { ParticlesBackground } from "./ParticlesBackground"
import { SocialIcon } from "./SocialIcon"

interface HeroSectionProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function HeroSection({ darkMode}: HeroSectionProps) {
  const handleAnimationComplete = () => {
    console.log("Animation completed!")
  }

  return (
      <section
          id="home-section"
          className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 overflow-hidden"
      >
        {/* Particles Background */}
        <ParticlesBackground darkMode={darkMode} />

        {/* Hero Content */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-10"
        >
          <BlurText
              text="BENMARZOUQ Mehdi"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-6xl font-bold mb-4"
              animationFrom={undefined}
              animationTo={undefined}
          />
          <ShinyText
              text="Engineering student passionate about web development"
              disabled={false}
              speed={3}
              className="custom-class text-xl md:text-2xl mb-8"
          />
          <div className="flex justify-center space-x-4">
            <SocialIcon icon={<GitHub />} href="https://github.com/Mehdi-BENMARZOUQ" />
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/mehdi-ben-marzouq" />
            <SocialIcon icon={<Mail />} href="mailto:mehdi.benmarzouq03@gmail.com" />
            <SocialIcon icon={<Phone />} href="tel:+212689568393" />
          </div>
        </motion.div>
      </section>
  )
}