// src/pages/home/index.jsx

import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import Testimonials from "./Testimonials";
import Awards from "./Awards";
import MyWorks from "./MyWorks";
import MySkills from "./MySkills";
import Experiences from "./Experiences";

const Home = () => (
  <div>
    <AboutMe />
    <MyServices />
    <MyWorks />
    <MySkills />
    <Testimonials />
    <Awards />
    <Experiences />
  </div>
);
export default Home;
