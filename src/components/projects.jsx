import { GrGithub, GrNetwork } from "react-icons/gr";
import {  BiNetworkChart } from "react-icons/bi";
import project1 from "../assets/images/projects/1.png";
import project2 from "../assets/images/projects/2.png";
import project3 from "../assets/images/projects/3.png";
import project5 from "../assets/images/projects/5.png";
import project6 from "../assets/images/projects/6.png";
import project7 from "../assets/images/projects/7.png";
import project8 from "../assets/images/projects/8.png";
import project9 from "../assets/images/projects/9.png";
import project10 from "../assets/images/projects/10.png";
import project11 from "../assets/images/projects/11.png";
import project12 from "../assets/images/projects/12.png";
import project13 from "../assets/images/projects/13.png";
import { useState } from "react";
import { content } from "../Content";

const project_content = [
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
    title: "Eagle-Iot GPS",
    image: project5,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | react-router-dom , email ,  swiper , tailwindcss , react-whatsapp",
    path: "https://github.com/mmmmzxe/Gps.git",
  },
  {
    title: "Helwan University",
    image: project6,
    tech: "  framer-motion , react ,react-icons , react-scroll ,tailwindcss",
    path: "",
    type: "web",
  },
  {
    title: " Where Tech ",
    image: project7,
    type: "web",
    tech: "Using React Js & Tailwind Css Framework | animate.css , aos , flag-icons , il8next , il8next-browser-languagedetector , il8next-http-backend , js-cookie , react-icons , react-whatsapp , swiper , react-router-dom , react-responsive-carousel , react-on-screen , tailwindcss",
    path: "https://www.linkedin.com/posts/mmmmzxe_frontabrend-react-html-activity-7206666715001204736-r3-_?utm_source=share&utm_medium=member_desktop",
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

const RecentProjects = () => {
  const { Projects} = content;
  const [filter, setFilter] = useState("web");
  const [visibleCount, setVisibleCount] = useState(4); // Show 6 projects initially

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Load 6 more projects
  };

  const filteredProjects = project_content
    .filter((project) => project.type === filter)
    .slice(0, visibleCount); // Show only the visible projects

  return (
    <div className="md:container overflow-hidden m-3" id="projects">
      <div>
        <h2 className="title" data-aos="fade-down">
     {Projects.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
         {Projects.subtitle}
        </h4>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-6 justify-center items-center transition transform">
        <div>
          <button
            onClick={() => setFilter("web")}
            className={`px-4 py-2 rounded-lg ${
              filter === "web"
                ? "bg-pink-600 text-white"
                : "bg-gray-200 text-gray-700"
            } font-medium transition-colors duration-200`}
          >
            Web
          </button>
        </div>

        <div>
          <button
            onClick={() => setFilter("app")}
            className={`px-4 py-2 rounded-lg ${
              filter === "app"
                ? "bg-pink-600 text-white"
                : "bg-gray-200 text-gray-700"
            } font-medium transition-colors duration-200`}
          >
            App
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="flex mt-8 items-center justify-center sm:flex-wrap md:flex-row flex-col w-full group gap-6 ">
        {filteredProjects.map((project, index) => (
          <div
            className="cad"
            key={index}
          >
            <div className="profile-pic">
              <div className="code"></div>
              <img src={project.image} alt={project.title}></img>
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name">{project.title}</span>
                <span className="about-me">{project.tech}</span>
              </div>
              <div className="bottom-bottom">
                <div className="social-links-container">
                  <a href={project.path} target="_blank" rel="noopener noreferrer">
                    <GrGithub className="text-2xl" />
                  </a>
                  {project.path2 && (
                    <a href={project.path2} target="_blank" rel="noopener noreferrer">
                      <BiNetworkChart className="text-xl" />
                    </a>
                  )}
                </div>
                <a href="mailto:maryem.mostafa00@gmail.com">
                  <button className="button">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < project_content.filter((project) => project.type === filter).length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="px-4 py-2  text-white rounded-lg font-medium hover:bg-pink-800 transition-colors"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
