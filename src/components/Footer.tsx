import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Let's Connect <span className="wave" style={{fontSize:"35px"}}>👋</span></h2>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Mehdi-BENMARZOUQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <GitHub />
            </a>
            <a
              href="https://linkedin.com/in/mehdi-ben-marzouq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin />
            </a>
            <a href="mailto:mehdi.benmarzouq03@gmail.com" className="hover:text-gray-300">
              <Mail />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© {new Date().getFullYear()} BENMARZOUQ Mehdi. All rights reserved.</div>
      </div>
    </footer>
  )
}

