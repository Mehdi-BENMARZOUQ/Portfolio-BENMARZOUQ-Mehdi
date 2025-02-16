import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SocialIconProps {
    icon: ReactNode
    href: string
}

export function SocialIcon({ icon, href }: SocialIconProps) {
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