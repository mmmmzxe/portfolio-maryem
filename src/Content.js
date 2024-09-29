// import images
import Hero_person from "../public/9.png";
import person1 from "../public/11.png";
import flutter from "./assets/images/Skills/flutter.png";
import Office from "./assets/images/Skills/of.png";
import sql from "./assets/images/Skills/sql.png";
import reactjs from "./assets/images/Skills/react.png";
import github from './assets/images/Skills/git.jpg'
import firebase from './assets/images/Skills/f.png'
import wordpress from './assets/images/Skills/w.png';
import Next from './assets/images/Skills/nextjs.png';
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/2.png";
import services_logo3 from "./assets/images/Services/3.png";
import services_logo4 from "./assets/images/Services/s.png";

import pdf from './assets/images/Maryem .pdf'
import va from '../public/10.png'
import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";
import Hireme_person3 from "./assets/images/Hireme/fu.png";
// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiFileList2Line } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
export const content = {
 
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Maryem",
    LastName: "Mostafa",
    btnText: "Hire Me",
    link:pdf,
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "2+",
        text: "Years of Experinse in Mobile Apps",
      },
      {
        count: "3+",
        text: "Years of Experinse in Database",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Mobile Apps ",
        para: "Flutter",
        logo: flutter,
      },
    
      {
        name: "Front-End",
        para: " React Js",
        logo: reactjs,
      },
      {
        name: "Database",
        para: "Sql / MySql",
        logo: sql,
      },
      {
        name: "Wordpress",
        para: "HTML/Css/PHP",
        logo: wordpress,
      },
      {
        name: "Microsoft Office",
        para: "Word / Exl / Powerpoint ",
        logo: Office,
      },
      {
        name: "Github",
        para: "Git",
        logo: github,
      },
      {
        name: "Firebase",
        para: "",
        logo: firebase,
      },   {
        name: "Front-End",
        para: "Next Js",
        logo: Next,
      },
 
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Certificates ",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Google Developer student club Egyptian Russian University",
        para: "For successful completing the flutter course period from march 2023 to may 2023",
        logo: services_logo1,
      },
      {
        title: "Google Developer student club future academy  ",
        para: " For successful completing the flutter course period for the 2022 to 2023",
        logo: services_logo1,
      },
      {
        title: "Google Developer student clubs Future academy",
        para: "For successful serving as a active google dsc for team member for the 2022-2024 academic year",
        logo: services_logo1,
      },
      {
        title: "It information technology specialist ",
        para: "Successfully completed the certification requirements for database",
        logo: services_logo2,
      },
      {
        title: "Entrepreneurship and Small business",
        para: " For successful completing the Entrepreneurship and Small business course period for the may 1, 2023",
        logo: services_logo3,
      },
      {
        title: "Swot analysis",
        para: "SWOT Matrix to analyze the internal and external environment of Serge Medical March 2022 . ",
        logo: services_logo4,
      },
   
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
img:va
,   
  },
  
  Hireme: {
    title: "Education",
    subtitle: "About me",
    image1: Hireme_person,
    image2: Hireme_person2,
    image3: Hireme_person3,
    city:'Egypt , Cairo , El shrouk ',

    para: "Future Academy - Higher Future Institute For Specialized Technological Studies",
    pare2:"BA of Management Information Systems",
   Grade: 3.5,
   final:'Special Needs Car (SNC) App | A+',
   exp:'GDSC Future Academy Core Team | Front-End Developer ,',
   exp2:'IEEE Future Academy Core Team | Head Front-End ,',
   exp3:'TECH Geeks club | Head Front-end ,',
   exp4:'PIONEERS 180 | Head Front-End',
   exp5:'SHADY SYSTEM | Training Flutter 3 Months',

 
   years:" Sep 2020 - Jun 2024",
   
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN",
    image:person1,
    social_media: [
      {
        text: "maryem.mostafa00@gmail.com",
        icon: GrMail,
        link: "mailto:maryem.mostafa00@gmail.com",
      },
      {
        text: "01030482371",
        icon: MdCall,
        link: "https://wa.me/+201030482371",
      },
      {
        text: "mmmmzxe",
        icon: BsInstagram,
        link: "https://www.instagram.com/mmmmzxe/",
      },
      {
        text: "mmmmzxe",
        icon: BsGithub,
        link: "https://www.github.com/mmmmzxe/",
      },
      {
        text: "mmmmzxe",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/mmmmzxe/",
      },
      {
        text: "cv",
        icon:   RiFileList2Line
        ,
        link:pdf ,
      },
    ],
  },
 
};
