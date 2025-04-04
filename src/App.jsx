// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import RecentProjects from './components/projects'
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import Splash from "./components/splash";


const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });


  }, []);
  return (
  
      <div className="  ">
   
   <Navbar />
   

      <Splash/>
      <Hero /> 
      <Hireme />
      <Skills />
      <Service />
  
    <RecentProjects/>
     
      <Contact />
  
     
    </div>
  );
};

export default App;
