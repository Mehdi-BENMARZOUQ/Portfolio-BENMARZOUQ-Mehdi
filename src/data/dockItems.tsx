import { FileText, Code, Briefcase } from "lucide-react"
import type { WindowId } from "../types/windowTypes"

export const dockItems = [
    { icon: <FileText />, title: "Resume" as WindowId },
    { icon: <Code />, title: "Skills" as WindowId },
    { icon: <Briefcase />, title: "Projects" as WindowId },
]