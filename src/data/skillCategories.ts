import ReactLogo from "../assets/icons/programmingLanguage/react.svg";
import AngularLogo from "../assets/icons/programmingLanguage/angular.svg";
import NodeJSLogo from "../assets/icons/programmingLanguage/nodedotjs.svg";
import DotNetLogo from "../assets/icons/programmingLanguage/dotnet.svg";
import SpringLogo from "../assets/icons/programmingLanguage/spring.svg";
import LaravelLogo from "../assets/icons/programmingLanguage/laravel.svg";
import ExpressLogo from "../assets/icons/programmingLanguage/express.svg";
import JavaScriptLogo from "../assets/icons/programmingLanguage/javascript.svg";
import TypeScriptLogo from "../assets/icons/programmingLanguage/typescript.svg";
import PythonLogo from "../assets/icons/programmingLanguage/python.svg";
import KotlinLogo from "../assets/icons/programmingLanguage/kotlin.svg";
import PHPLogo from "../assets/icons/programmingLanguage/php.svg";
import CLogo from "../assets/icons/programmingLanguage/c.svg";
import Java from "../assets/icons/programmingLanguage/java.svg";
import CSharpLogo from "../assets/icons/programmingLanguage/csharp.svg";
import UMLLogo from "../assets/icons/programmingLanguage/uml.svg";
import FigmaLogo from "../assets/icons/programmingLanguage/figma.svg";
import GithubLogo from "../assets/icons/programmingLanguage/Github.svg";
import GitLogo from "../assets/icons/programmingLanguage/git.svg";
import HTMLLogo from "../assets/icons/programmingLanguage/htmx.svg";
import Merise from "../assets/icons/programmingLanguage/mega.svg";

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