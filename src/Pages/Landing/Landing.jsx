import About from "./About";
import Blogs from "./Blogs";
// import Club from "./Club";
import Collection from "./Collection";
import Contact from "./Contact";
import Details from "./Details";
import Faq from "./Faq";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Roadmap2024 from "./Roadmap2024";
import Soon from "./Soon";
import Subscribe from "./Subscribe";
import Team from "./Team";
import Value from "./Value";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Collection />
      {/* <Club /> */}
      <Details />
      <Value />
      <Roadmap />
      <Roadmap2024 />
      <Soon />
      <Team />
      {/* <Blogs /> */}
      <Faq />
      <Contact />
      <Subscribe />
    </div>
  );
};

export default Landing;
