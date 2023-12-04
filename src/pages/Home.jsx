import Contact from '../Component/Contact';
import Intro from '../Component/Intro';
import NavMenu from '../Component/NavMenu';
import Testimonial from '../Component/Testimonial';
import Skills from '../Component/Skills';
import MyProjects from '../Component/MyProjects';
import MyServices from '../Component/MyServices';
const Home = () => {
  return (
    <>
      <NavMenu />
      <Intro />
      <Skills />
      <MyProjects />
      <MyServices />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
