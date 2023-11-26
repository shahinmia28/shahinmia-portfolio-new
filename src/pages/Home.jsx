import About from '../Component/About';
import Contact from '../Component/Contact';
import Intro from '../Component/Intro';
import NavMenu from '../Component/NavMenu';
import Services from '../Component/Services';
import Testimonial from '../Component/Testimonial';
const Home = () => {
  return (
    <>
      <NavMenu />
      <Intro />
      <Services />
      <About />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
