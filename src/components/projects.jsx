
import { GrGithub, GrNetwork } from "react-icons/gr";
import { content } from "../Content";
import { TbWorldDownload, TbWorldUpload } from "react-icons/tb";
import { BiCode, BiNetworkChart } from "react-icons/bi";

import { GrMail } from "react-icons/gr";
const RecentProjects = () => {
    const { Projects } = content;
  return (
    <div className="md:container overflow-hidden m-3" id="projects">
       <h2 className="title" data-aos="fade-down">
          {Projects.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Projects.subtitle}
        </h4>
        <div className="flex mt-8 items-center justify-center sm:flex-wrap  md:flex-row flex-col w-full group gap-6 ">
        {Projects.project_content.map((pro, i) => (
   <div class="card" key={i} data-aos="fade-up"
   data-aos-delay={i * 700}>

  


<div class="profile-pic" >
  <div className="code"></div>
   <img src= {pro.image}></img>
    </div>
    <div class="bottom ">
      <div class="content ">
        <span class="name">{pro.title}</span>
        <span class="about-me "
          >{pro.tech}
        </span>
      </div>
      <div class="bottom-bottom">
        <div class="social-links-container">
          <a href={pro.path} target="_blank"> <GrGithub className="text-2xl"/></a>
       <a href={pro.path2} target="_blank"><BiNetworkChart className="text-xl"/></a>
     
        </div>
        <a href="mailto:maryem.mostafa00@gmail.com"><button class="button" >Contact Me</button></a>
      </div>
    </div>

  </div>
))}
</div>

    </div>
  );
};

export default RecentProjects;