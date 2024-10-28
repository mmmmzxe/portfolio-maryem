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
   exp6:'WHERE TECH | web dev 6 Months',

 
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
    title: "Movies",
    image: project14,
    type: "web",
    tech: "Using next Js & Tailwind Css Framework | , Api Tmdbs , Login and register and forget password using api backend express js , Api country and channels, axios , Cookies, clsx , paypal , react-dropdown-menu , react label, next js - toast-notify ,react-youtube ,Swiper , react-icons , embla-carousel-react ",
    path: "https://github.com/mmmmzxe/Movies-1",
    path2:"https://www.linkedin.com/posts/mmmmzxe_nextjs-web-tailwindcss-activity-7250378342946721792-RvsC?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: " Where Tech ",
    image: project7,
    type: "web",
    path2:"https://wheretech.org/",
    tech: "Using React Js & Tailwind Css Framework | animate.css , aos , flag-icons , il8next , il8next-browser-languagedetector , il8next-http-backend , js-cookie , react-icons , react-whatsapp , swiper , react-router-dom , react-responsive-carousel , react-on-screen , tailwindcss",
    path: "https://www.linkedin.com/posts/mmmmzxe_frontabrend-react-html-activity-7206666715001204736-r3-_?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Eagle-Iot GPS",
    image: project5,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | react-router-dom , email ,  swiper , tailwindcss , react-whatsapp",
    path: "https://github.com/mmmmzxe/Gps.git",
  },
  {
    title: "Food & Drink",
    image: project15,
    type: "web",
    tech: "Using React Js & scss Framework | ",
    path: "https://github.com/mmmmzxe/Food.git",
    path2: "https://foodrink.netlify.app/",
  },
  {
    title: "Jewelry store",
    image: project2,
    type: "web",
    tech: "Using React JS & Tailwind Css Framework | postcss , autoprefixe , react-icons , swiper ,  tailwindcss   ",
    path: "https://github.com/mmmmzxe/Jewelry-stor.git",
    path2: "https://scandalous-tin.surge.sh/",
  },
  {
    title: "Jewelry App",
    image: project3,
    type: "app",
    tech: "Using Flutter | google_nav_bar , google_fonts , email_otp , firebase_auth , firebase_core , icons_flutter,  provider",
    path: "https://github.com/mmmmzxe/jewelleryapp.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_flutter-flutterdeveloper-firebase-activity-7092230426236194816-WZCJ?utm_source=share&utm_medium=member_desktop",
  },


  {
    title: "Helwan University",
    image: project6,
    tech: "  framer-motion , react ,react-icons , react-scroll ,tailwindcss",
    path: "",
    type: "web",
  },
 
  {
    title: " Books store",
    image: project8,
    type: "web",
    tech: " Using React Js & Tailwind Css Framework | react-icons , react-slick , slick-carousel , eslint , eslint-plugin-react , eslint-plugin-react-hooks , eslint-plugin-react-refresh , postcss , tailwindcss , vite ,",
    path: "https://github.com/mmmmzxe/Book.git",
  },
  {
    title: "FurniShop",
    image: project9,
    type: "web",
    tech: " Using React Js & Tailwind Css Framework | autoprefixer ,postcss , react-icons , swiper , tailwindcss",
    path: "https://github.com/mmmmzxe/furniture.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_react-reactjs-frontend-activity-7054302975850086400-O8j8?utm_source=share&utm_medium=member_desktop",
  },
  
  {
    title: "Clothes Shop",
    image: project10,
    type: "app",
    tech: "Using Futter | flutter_svg , google_fonts , line_icons  ",
    path: "https://github.com/mmmmzxe/clothes-Flutter.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_flutterdeveloper-activity-7056454632599937024-5d0M?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Coffe Shop",
    type: "app",
    image: project11,
    tech: "Using Futter | google_fonts ,flutter_svg , line_icons , bottom_navy_bar ,urved_navigation_bar , dependencies",
    path: "https://github.com/mmmmzxe/coffe_app.git",
    path2:
      "https://www.linkedin.com/posts/mmmmzxe_coffee-shop-mobile-app-framework-flutter-activity-7072686965682253825-WXMh?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Online shop",
    image: project12,
    type: "web",
    tech: "Using React Js & Bootstrap Framework | bootstrap , firebase , font-awesome , otp-input-react , react-hot-toast , react-icons , react-id-swiper , react-otp-input , react-phone-input-2 , react-redux , react-router-dom , react-swiper , redux , swiper ",
    path: "https://github.com/mmmmzxe/store-full-react.git",
  },
  {
    title: "SNC",
    image: project13,
    type: "app",
    tech: "Using Flutter |  google_maps_flutter , flutter_polyline_points ,  sizer_pro , smooth_page_indicator , flutter_google_places , geocoding , geolocator , location , gender_picker , dob_input_field , dio , carousel_slider , ripple_wave , flutter_map , latlong2 , http , animated_splash_screen , page_transition ",
    path: "https://www.linkedin.com/posts/mmmmzxe_flutter-spicalabrneeds-backend-activity-7206183466915241985-U3OO?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "MU Constructioninc",
    image: project1,
    type: "web",
    tech: "Using React Js & Bootstrap Framework | bootstrap , email , framer-motion , react-icons , react-scripts , react-scroll-trigger , react-whatsapp , swiper , web-vitals",
    path: "https://github.com/mmmmzxe/MU-Real.git",
  },
];
