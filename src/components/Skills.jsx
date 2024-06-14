// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";
import { color } from "framer-motion";

const customStyles = {
  content: {
    background:"black",
    color:"white",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit m-3" >
      {/* modal */}
    

      {/* content */}
      <div className="m-2 w-full ">
        <div className="md:container">  <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="shine" data-aos="fade-down">
          {skills.subtitle}
        </h4></div>
      
        <br />
        <div className="flex flex-wrap gap-5 sm:flex-row group: justify-center w-full ">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className=" sm:cursor-pointer 
               relative group  flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 w-full"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6 className="text-t">{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
