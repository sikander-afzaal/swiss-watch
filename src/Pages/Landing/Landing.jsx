import About from "./About";
import Blogs from "./Blogs";
import Club from "./Club";
import Collection from "./Collection";
import Details from "./Details";
import Faq from "./Faq";
import Hero from "./Hero";
import Soon from "./Soon";
import Team from "./Team";
import Value from "./Value";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Collection />
      <Club />
      <Details />
      <Value />
      <Soon />
      <Team />
      <Blogs />
      <Faq />
    </div>
  );
};

export default Landing;
