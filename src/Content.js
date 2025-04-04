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
import { MdArrowForward, MdCall, MdWork } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiFileList2Line } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import project1 from "./assets/images/projects/1.png";
import project2 from "./assets/images/projects/2.png";
import project3 from "./assets/images/projects/3.png";
import project5 from "./assets/images/projects/5.png";
import project6 from "./assets/images/projects/6.png";
import project7 from "./assets/images/projects/7.png";
import project8 from "./assets/images/projects/8.png";
import project9 from "./assets/images/projects/9.png";
import project10 from "./assets/images/projects/10.png";
import project11 from "./assets/images/projects/11.png";
import project12 from "./assets/images/projects/12.png";
import project13 from "./assets/images/projects/13.png";
import project14 from "./assets/images/projects/14.png";
import project15 from "./assets/images/projects/15.png";
import project16 from "./assets/images/projects/16.png";
import project17 from "./assets/images/projects/17.png";
import project18 from "./assets/images/projects/18.png";
import project19 from "./assets/images/projects/19.png";
import project20 from "./assets/images/projects/20.png";
import project21 from "./assets/images/projects/21.png";
import project22 from "./assets/images/projects/22.png";
import project23 from "./assets/images/projects/23.png";
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
   exp9:'Google Developer Groups Cairo Core Team ,',
   exp2:'IEEE Future Academy Core Team | Head Front-End ,',
   exp3:'TECH Geeks club | Head Front-end ,',
   exp4:'PIONEERS 180 | Head Front-End',
   exp5:'SHADY SYSTEM | Training Flutter 3 Months',
   exp6:'WHERE TECH | web dev 6 Months',
   exp7:'NOT FOUND AGANCY | Front-End Developer ',
   exp8:'BLACK HORSE | Front-End Instractor ',

 
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
      },   {
        text: "UPWork",
        icon:   MdWork
        ,
        link:'https://www.upwork.com/freelancers/~01608d8efcd2f6f081?mp_source=share' ,
      },
    ],
  },
 
};
export const project_content = [

  {
    title: "Not Found Agency",
    image: project16,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard",
  
   
    path2:"https://notfound-agency.com/"
  },
  {
    title: "Coffe Point",
    image: project17,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard ",
    
   
    path2:"https://coffeepointegy.com/"
  },
  {
    title: " Where Tech ",
    image: project7,
    type: "web",
    path2:"https://wheretech.org/",
    tech: "Using React Js & Tailwind Css Framework | Site ",
    path: "https://www.linkedin.com/posts/mmmmzxe_frontabrend-react-html-activity-7206666715001204736-r3-_?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Movies",
    image: project14,
    type: "web",
    tech: "Using next Js & Tailwind Css Framework | Site ",
    path: "https://github.com/mmmmzxe/Movies-1",
    path2:"https://www.linkedin.com/posts/mmmmzxe_nextjs-web-tailwindcss-activity-7250378342946721792-RvsC?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Sharqy",
    image: project18,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard",
    path2: "https://sharqyeg.com/",
  },
  {
    title: "Elrawad Ibn Sina",
    image: project19,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard",
    path2: "https://elrawad-ibn-sina.com/",
  },
  {
    title: "Omar Roshdy",
    image: project20,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard",
    path2: "https://omarroshdy.com/",
  },
  {
    title: "Pearl Store",
    image: project21,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard",
    path2: "https://pearl-store.net/",
  },
  {
    title: "Rabea Mall",
    image: project23,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard",
    path2: "https://rabeamall.com/",
  },
  {
    title: "MFEI",
    image: project22,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site && Dashboard ",
    path2: "http://159.65.162.107/",
  },
  {
    title: "Jewelry store",
    image: project2,
    type: "web",
    tech: "Using React JS & Tailwind Css Framework  | Site  ",
    path: "https://github.com/mmmmzxe/e-jewelry.git",
    path2: "https://jewelrys.netlify.app/",
  },

  {
    title: "Food & Drink",
    image: project15,
    type: "web",
    tech: "Using React Js & scss Framework | Site ",
    path: "https://github.com/mmmmzxe/Food.git",
    path2: "https://foodrink.netlify.app/",
  },
  {
    title: "Eagle-Iot GPS",
    image: project5,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | Site" ,
    path: "https://github.com/mmmmzxe/Gps.git",
  },
  {
    title: "Jewelry App",
    image: project3,
    type: "app",
    tech: "Using Flutter ",
    path: "https://github.com/mmmmzxe/jewelleryapp.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_flutter-flutterdeveloper-firebase-activity-7092230426236194816-WZCJ?utm_source=share&utm_medium=member_desktop",
  },


  {
    title: "Helwan University",
    image: project6,
    tech: " Using React Js & Tailwind Css Framework  | Site",
    path: "",
    type: "web",
  },
 
  {
    title: " Books store",
    image: project8,
    type: "web",
    tech: " Using React Js & Tailwind Css Framework | Site",
    path: "https://github.com/mmmmzxe/Book.git",
  },
  {
    title: "FurniShop",
    image: project9,
    type: "web",
    tech: " Using React Js & Tailwind Css Framework | Site",
    path: "https://github.com/mmmmzxe/furniture.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_react-reactjs-frontend-activity-7054302975850086400-O8j8?utm_source=share&utm_medium=member_desktop",
  },
  
  {
    title: "Clothes Shop",
    image: project10,
    type: "app",
    tech: "Using Futter  ",
    path: "https://github.com/mmmmzxe/clothes-Flutter.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_flutterdeveloper-activity-7056454632599937024-5d0M?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Coffe Shop",
    type: "app",
    image: project11,
    tech: "Using Futter ",
    path: "https://github.com/mmmmzxe/coffe_app.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_coffee-shop-mobile-app-framework-flutter-activity-7072686965682253825-WXMh?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Online shop",
    image: project12,
    type: "web",
    tech: "Using React Js & Bootstrap Framework  | Site",
    path: "https://github.com/mmmmzxe/store-full-react.git",
  },
  {
    title: "SNC",
    image: project13,
    type: "app",
    tech: "Using Flutter ",
    path: "https://www.linkedin.com/posts/mmmmzxe_flutter-spicalabrneeds-backend-activity-7206183466915241985-U3OO?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "MU Constructioninc",
    image: project1,
    type: "web",
    tech: "Using React Js & Bootstrap Framework | Site",
    path: "https://github.com/mmmmzxe/MU-Real.git",
  },
];
