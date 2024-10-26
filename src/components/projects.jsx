import { GrGithub, GrNetwork } from "react-icons/gr";
import {  BiNetworkChart } from "react-icons/bi";

import { useState } from "react";
import { content } from "../Content";
import { project_content } from "../Content";



const RecentProjects = () => {
  const { Projects} = content;
  const [filter, setFilter] = useState("web");
  const [visibleCount, setVisibleCount] = useState(4); 

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); 
  };

  const filteredProjects = project_content
    .filter((project) => project.type === filter)
    .slice(0, visibleCount); 

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
                ? "bg-t text-white"
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
                ? "bg-t text-white"
                : "bg-gray-200 text-gray-700"
            } font-medium transition-colors duration-200`}
          >
            App
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="flex mt-8 items-center justify-center sm:flex-wrap md:flex-row flex-col w-full group gap-2 ">
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
            className="px-4 py-2  text-white rounded-lg font-medium hover:bg-t transition-colors"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
