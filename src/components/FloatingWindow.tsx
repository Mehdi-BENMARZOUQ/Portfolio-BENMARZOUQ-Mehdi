import type React from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface FloatingWindowProps {
  title: string
  onClose: () => void
  children: React.ReactNode
}

export default function FloatingWindow({ title, onClose, children }: FloatingWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="overflow-y-auto max-h-[60vh]">{children}</div>
    </motion.div>
  )
}

