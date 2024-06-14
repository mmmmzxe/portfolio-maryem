// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section  className="overflow-hidden">
      <div className="min-h-[100] relative flex md:flex-row flex-col  justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="sm:absolute  h-full md:w-10/12 w-10/12 top-0 right-0 bg-primaryLinear bottom-0 -z-8"
        >
          <h1 className="sm:rotate-90 rotate-0 m-5 absolute sm:right-[-15%] sm:top-[45%] top-0 right-0   text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 mt-20" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
          <a href={hero.link} target="_blank">  <button className="btn">{hero.btnText}</button></a>
          </div>
          <div className="flex flex-col gap-10 mt-20">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 pt-10
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
