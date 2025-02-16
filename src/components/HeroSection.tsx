import type React from "react"
import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Phone } from "lucide-react"
import BlurText from "@/src/reactbits/BlurText";
import ShinyText from '@/src/reactbits/ShinyText';


export default function HeroSection() {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section id="home-section" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <BlurText
            text="BENMARZOUQ Mehdi"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-6xl font-bold mb-4" animationFrom={undefined} animationTo={undefined}/>
        <ShinyText text="Engineering student passionate about web development" disabled={false} speed={3} className='custom-class text-xl md:text-2xl mb-8' />
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

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-md"
    >
      {icon}
    </motion.a>
  )
}

