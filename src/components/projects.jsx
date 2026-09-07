import { useState } from "react";
import { content, project_content } from "../Content";
import { GrGithub } from "react-icons/gr";
import { BiLinkExternal, BiCodeAlt, BiMobileAlt, BiLaptop, BiPackage, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

const RecentProjects = () => {
  const { Projects } = content;
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setVisibleCount(6); // reset pagination on filter change
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  // Filter projects according to tab
  const filteredProjects = project_content.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  // Calculate project counts for tabs
  const countAll = project_content.length;
  const countWeb = project_content.filter((p) => p.type === "web").length;
  const countApp = project_content.filter((p) => p.type === "app").length;
  const countFullStack = project_content.filter((p) => p.type === "fullstack").length;
  const countPackage = project_content.filter((p) => p.type === "package").length;

  const currentVisible = filteredProjects.slice(0, visibleCount);

  // Helper to extract tech tags from tech string
  const renderTechTags = (techString) => {
    if (!techString) return null;
    const cleanTech = techString
      .replace(/Using/gi, "")
      .replace(/Framework/gi, "")
      .replace(/\|.*/, "")
      .trim();

    const tags = cleanTech.split(/&|,|\+/).map((t) => t.trim()).filter(Boolean);

    return (
      <div className="flex flex-wrap gap-1.5 mt-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="projects">
      {/* Title Section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <BiCodeAlt className="text-base" /> Portfolio Showcase
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2" data-aos="fade-down">
          {Projects.title}
        </h2>
        <h4 className="text-lg md:text-xl font-medium text-pink-400/90 tracking-widest uppercase" data-aos="fade-down">
          {Projects.subtitle}
        </h4>
      </div>

      {/* Filter Navigation Tabs */}
      <div className="flex justify-center mb-12" data-aos="fade-up">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-[#171825] border border-white/10 shadow-2xl backdrop-blur-xl gap-1">
          <button
            onClick={() => handleFilterChange("all")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              filter === "all"
                ? "bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] text-white shadow-[0_4px_20px_rgba(238,44,118,0.4)] scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            All Projects
            <span className={`px-2 py-0.5 text-xs rounded-full ${filter === "all" ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
              {countAll}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange("package")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              filter === "package"
                ? "bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] text-white shadow-[0_4px_20px_rgba(238,44,118,0.4)] scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BiPackage className="text-lg" />
            NPM Packages
            <span className={`px-2 py-0.5 text-xs rounded-full ${filter === "package" ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
              {countPackage}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange("fullstack")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              filter === "fullstack"
                ? "bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] text-white shadow-[0_4px_20px_rgba(238,44,118,0.4)] scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BiCodeAlt className="text-lg" />
            Full Stack
            <span className={`px-2 py-0.5 text-xs rounded-full ${filter === "fullstack" ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
              {countFullStack}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange("web")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              filter === "web"
                ? "bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] text-white shadow-[0_4px_20px_rgba(238,44,118,0.4)] scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BiLaptop className="text-lg" />
            Web Apps
            <span className={`px-2 py-0.5 text-xs rounded-full ${filter === "web" ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
              {countWeb}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange("app")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              filter === "app"
                ? "bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] text-white shadow-[0_4px_20px_rgba(238,44,118,0.4)] scale-[1.02]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <BiMobileAlt className="text-lg" />
            Mobile Apps
            <span className={`px-2 py-0.5 text-xs rounded-full ${filter === "app" ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
              {countApp}
            </span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentVisible.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 150}
            className="group relative bg-[#131422]/90 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:shadow-[0_12px_35px_rgba(238,44,118,0.25)] hover:border-[#ee2c76]/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131422] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 text-[11px] font-bold tracking-wider uppercase rounded-full bg-black/70 backdrop-blur-md text-pink-400 border border-pink-500/30 flex items-center gap-1.5 shadow-md">
                    {project.type === "app" ? (
                      <>
                        <BiMobileAlt /> Mobile App
                      </>
                    ) : project.type === "fullstack" ? (
                      <>
                        <BiCodeAlt /> Full Stack
                      </>
                    ) : project.type === "package" ? (
                      <>
                        <BiPackage className="text-[#ee2c76]" /> NPM Package
                      </>
                    ) : (
                      <>
                        <BiLaptop /> Web Application
                      </>
                    )}
                  </span>
                </div>

                {/* Overlay Action Buttons on Image Hover */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.path2 && (
                    <a
                      href={project.path2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full bg-[#ee2c76] text-white hover:bg-pink-600 hover:scale-110 transition-all duration-300 shadow-lg"
                      title={project.type === "package" ? "View on NPM" : "Live Site / Preview"}
                    >
                      <BiLinkExternal className="text-xl" />
                    </a>
                  )}
                  {project.path && (
                    <a
                      href={project.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 border border-white/20 transition-all duration-300 shadow-lg"
                      title="View Source Code"
                    >
                      <GrGithub className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300 line-clamp-1 mb-1">
                  {project.title}
                </h3>

                {project.type === "package" && (
                  <div className="mt-1.5 mb-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 border border-[#ee2c76]/30 font-mono text-[11px] text-pink-300 shadow-sm">
                    <span className="text-[#ee2c76] font-bold">$</span> npm i @mmmmzxe/react-print
                  </div>
                )}
                
                {renderTechTags(project.tech)}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-auto">
              <div className="flex items-center gap-3">
                {project.path2 && (
                  <a
                    href={project.path2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <span>{project.type === "package" ? "NPM Package" : "Visit Site"}</span>
                    <BiLinkExternal className="text-sm" />
                  </a>
                )}

                {project.path && (
                  <a
                    href={project.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <GrGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                )}
              </div>

              <a
                href="mailto:maryem.mostafa00@gmail.com"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-[#ee2c76] text-slate-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-[#ee2c76]"
              >
                <MdOutlineMailOutline className="text-sm" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-12">
        {visibleCount < filteredProjects.length && (
          <button
            onClick={handleSeeMore}
            className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#ee2c76] to-[#f43f5e] text-white font-semibold text-sm hover:shadow-[0_6px_25px_rgba(238,44,118,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>See More Projects ({filteredProjects.length - visibleCount} remaining)</span>
            <BiChevronDown className="text-lg animate-bounce" />
          </button>
        )}

        {visibleCount > 6 && (
          <button
            onClick={handleShowLess}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-semibold text-sm transition-all duration-300"
          >
            <span>Show Less</span>
            <BiChevronUp className="text-lg" />
          </button>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
