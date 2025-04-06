import ReactLogo from "@/src/assets/icons/programmingLanguage/react.svg";
import AngularLogo from "@/src/assets/icons/programmingLanguage/angular.svg";
import NodeJSLogo from "@/src/assets/icons/programmingLanguage/nodedotjs.svg";
import DotNetLogo from "@/src/assets/icons/programmingLanguage/dotnet.svg";
import SpringLogo from "@/src/assets/icons/programmingLanguage/spring.svg";
import LaravelLogo from "@/src/assets/icons/programmingLanguage/laravel.svg";
import ExpressLogo from "@/src/assets/icons/programmingLanguage/express.svg";
import JavaScriptLogo from "@/src/assets/icons/programmingLanguage/javascript.svg";
import TypeScriptLogo from "@/src/assets/icons/programmingLanguage/typescript.svg";
import PythonLogo from "@/src/assets/icons/programmingLanguage/python.svg";
import KotlinLogo from "@/src/assets/icons/programmingLanguage/kotlin.svg";
import PHPLogo from "@/src/assets/icons/programmingLanguage/php.svg";
import CLogo from "@/src/assets/icons/programmingLanguage/c.svg";
import Java from "@/src/assets/icons/programmingLanguage/java.svg";
import CSharpLogo from "@/src/assets/icons/programmingLanguage/csharp.svg";
import UMLLogo from "@/src/assets/icons/programmingLanguage/uml.svg";
import FigmaLogo from "@/src/assets/icons/programmingLanguage/figma.svg";
import GithubLogo from "@/src/assets/icons/programmingLanguage/github.svg";
import GitLogo from "@/src/assets/icons/programmingLanguage/git.svg";
import HTMLLogo from "@/src/assets/icons/programmingLanguage/htmx.svg";
import Merise from "@/src/assets/icons/programmingLanguage/mega.svg";

export const skillCategories = [
    {
        name: "Frontend Frameworks",
        skills: [
            { name: "React", logo: ReactLogo, level: 90 },
            { name: "Angular", logo: AngularLogo, level: 87 },
        ]
    },
    {
        name: "Backend Technologies",
        skills: [
            { name: "Node.js", logo: NodeJSLogo, level: 90 },
            { name: ".NET", logo: DotNetLogo, level: 70 },
            { name: "Spring", logo: SpringLogo, level: 70 },
            { name: "Laravel", logo: LaravelLogo, level: 80 },
            { name: "Express", logo: ExpressLogo, level: 90 },
        ]
    },
    {
        name: "Programming Languages",
        skills: [
            { name: "JavaScript", logo: JavaScriptLogo, level: 90 },
            { name: "TypeScript", logo: TypeScriptLogo, level: 70 },
            { name: "Python", logo: PythonLogo, level: 70 },
            { name: "Java", logo: Java, level: 70 },
            { name: "C#", logo: CSharpLogo, level: 95 },
            { name: "Kotlin", logo: KotlinLogo, level: 95 },
            { name: "PHP", logo: PHPLogo, level: 95 },
            { name: "C", logo: CLogo, level: 95 },
        ]
    },
    {
        name: "Design & Modeling",
        skills: [
            { name: "UML", logo: UMLLogo, level: 95 },
            { name: "Merise", logo: Merise, level: 95 },
            { name: "Figma", logo: FigmaLogo, level: 95 },
        ]
    },
    {
        name: "Tools & Others",
        skills: [
            { name: "Git", logo: GitLogo, level: 95 },
            { name: "GitHub", logo: GithubLogo, level: 95 },
            { name: "HTML/CSS/SCSS", logo: HTMLLogo, level: 85 },
        ]
    }
]