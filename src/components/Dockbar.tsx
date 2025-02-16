import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Code, Briefcase } from "lucide-react"
import FloatingWindow from "./FloatingWindow"

const dockItems = [
  { icon: <FileText />, title: "Resume" },
  { icon: <Code />, title: "Skills" },
  { icon: <Briefcase />, title: "Projects" },
]

export default function Dockbar() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2"
      >
        <div className="flex space-x-4">
          {dockItems.map((item, index) => (
            <DockIcon key={index} {...item} onClick={() => setActiveWindow(item.title)} />
          ))}
        </div>
      </motion.div>
      {activeWindow && (
        <FloatingWindow title={activeWindow} onClose={() => setActiveWindow(null)}>
          {/* Add content for each window */}
          {activeWindow === "Resume" && <p>Resume content goes here</p>}
          {activeWindow === "Skills" && <p>Skills content goes here</p>}
          {activeWindow === "Projects" && <p>Projects content goes here</p>}
        </FloatingWindow>
      )}
    </>
  )
}

function DockIcon({ icon, title, onClick }: { icon: React.ReactNode; title: string; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      onClick={onClick}
    >
      {icon}
      <span className="sr-only">{title}</span>
    </motion.button>
  )
}

