import chatApplication from "@/public/projects-img/projects-photos/chatApplication.png";
import photoManagement from "@/public/projects-img/projects-photos/photoManagerProject.png";
import FSTWebsite from "@/public/projects-img/fstg_website.png";
import EventManagement from "@/public/projects-img/event_management.png";
import IncidentManagement from "@/public/projects-img/incident_managment.png";
import PublicProcurement from "@/public/projects-img/Public_procurement.png";

const myGitHub = "https://github.com/Mehdi-BENMARZOUQ";

export const projects = [
    {
        title: "Real-time messaging application",
        description: "A software platform enabling instant text, Image, or video communication between users.",
        image: chatApplication,
        repo: myGitHub,
        tags: ["Node.js/Express", "React.js", "MongoDB", "Tailwind CSS", "Daisy UI", "Zustand"]
    },
    {
        title: "Photo organization system based on facial recognition using AI",
        description: "A photo organization system using facial recognition automates image tagging and grouping based on identified individuals.",
        image: photoManagement,
        repo: myGitHub,
        tags: ["Node.js/Express", "React.js", "MinIO", "Python/OpenCV", "PostgreSQL"]
    },
    {
        title: "FST Marrakech Website",
        description: "Developed with Laravel and ReactJS, this application allows students to check their grades while empowering administrators to manage updates.",
        image: FSTWebsite,
        repo: myGitHub,
        tags: ["React.js","Laravel", ]
    },
    {
        title: "Event Management Website",
        description: "Built with Laravel and ReactJS, this application manages event registrations and ticket sales.",
        image: EventManagement,
        repo: myGitHub,
        tags: ["React.js", "Laravel"]
    },
    {
        title: "Incident Management System",
        description: "A robust incident management system developed with Spring Boot and Angular, enabling efficient tracking and resolution of incidents impacting the bank's operations.",
        image: IncidentManagement,
        repo: myGitHub,
        tags: ["SpringBoot", "Angular"]
    },
    {
        title: "Public Procurement Tracking Application",
        description: "A public procurement tracking application developed with Laravel, PHP, HTML, CSS, and Bootstrap, enabling transparent and efficient management of the procurement process.",
        image: PublicProcurement,
        repo: myGitHub,
        tags: ["Laravel", "Html", "CSS", "Bootstrap"]
    }
]