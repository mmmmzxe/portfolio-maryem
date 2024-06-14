
import { content } from "../Content";
import { MdLocationCity, MdLocationOn, MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className=" mb-10" id="skills">
      <div className="md:container px-5 pt-14 ">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse" >
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden mr-7"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-l
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] flex"
          >
            
            <div>
            <div className="flex mb-4"><MdLocationOn className="text-white text-3xl mr-3"/>
              <h6 className="leading-7 text-white">{Hireme.city}</h6></div>
              <hr className="text-white"></hr>
            <div className="flex mt-3">  <MdLocationCity className="text-white text-3xl mr-3"/> <h5 className="leading-7 text-white">{Hireme.para}</h5></div>
            <br />
            <p className="py-2 text-[13px] ">{Hireme.pare2}</p>
            <p className="py-2 text-[13px]">{Hireme.years}</p>
            <p className="text-t py-2 font-bold">Grade: {Hireme.Grade}</p>
           <div className="flex"> <FaGraduationCap className="text-white text-3xl mr-3" />
           <p className="text-white py-2 "><span className="text-white py-2 font-bold mr-2">Final Project Graduation : </span>{Hireme.final}</p></div>
            <hr className="text-white"></hr>
           <div className="flex mt-3"> <MdWork className="text-white text-3xl mr-3"/> <div>
           <p>{Hireme.exp}</p>
           <p>{Hireme.exp2}</p>
           <p>{Hireme.exp3}</p>
           <p>{Hireme.exp4}</p>
           <p>{Hireme.exp5}</p></div></div>
            </div>
            <div><img src={Hireme.image3} className="w-[120px]"></img></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hireme;
