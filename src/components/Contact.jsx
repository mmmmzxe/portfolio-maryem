import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import person from '../../public/11.png'
const Contact = () => {
  const { Contact } = content;
 

  return (
    <section className=" text-white" id="contact">
     

      <div className="md:container py-14">
        <div className="flex justify-center w-full items-center flex-wrap">
      
       <div className="p-6 "> <h2 className="title pb-4 !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle  pb-4" data-aos="fade-down">
          {Contact.subtitle}
        </h4>   <div className="  pb-4 flex gap-10 md:flex-row flex-col">
       
       <div        className='flex items-center gap-5 flex-wrap '>
         {Contact.social_media.map((content, i) => (
        
            
             <a   key={i}  className='text-3xl p-2.5 hover:bg-white hover:text-t rounded-full sm:cursor-pointer'
        href={content.link} target="_blank">
            {createElement(content.icon)}
             </a>
          
         ))}
       </div>
     </div>
     
        </div>
        <div><img src={person} className=""></img></div>
        </div>
       
        <br />
     
      </div>
    </section>
  );
};

export default Contact;
