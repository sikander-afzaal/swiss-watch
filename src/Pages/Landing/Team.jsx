import HeadingComp from "../../Components/HeadingComp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Team = () => {
  return (
    <div id="team" className="full relative mt-[70px] xl:mt-[150px] ">
      <div className="absolute rounded-full top-[20%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  right-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-3 text-center">
        <HeadingComp head="Swiss Cryptowatch Club Team" sub="our brain" />
        <p className="text-white text-base sm:text-[20px] leading-[30px] ">
          Please join our discord to get involved with the community and receive
          exclusive updates.
        </p>
        {window.innerWidth > 1280 ? (
          <div className="grid mt-[50px] grid-cols-3 w-full gap-6">
            <TeamBox img="/team3.jpg" name="Ronald Grob" role="Founder" />
            <TeamBox img="/team2.jpg" name="Daniel Labhart" role="Consultant" />
            <TeamBox img="/team1.jpg" name="Micha Kornmayer" role="Designer" />
          </div>
        ) : (
          <Splide
            options={{
              arrows: true,
              type: "loop",
              width: "100%",
              pagination: false,
              perPage: 1,
              drag: true,
            }}
            className="slider-arrows slider-center mt-[30px]"
          >
            <SplideSlide>
              <TeamBox img="/team3.jpg" name="Ronald Grob" role="Founder" />
            </SplideSlide>
            <SplideSlide>
              <TeamBox
                img="/team2.jpg"
                name="Daniel Labhart"
                role="Consultant"
              />
            </SplideSlide>
            <SplideSlide>
              <TeamBox
                img="/team1.jpg"
                name="Micha Kornmayer"
                role="Designer"
              />
            </SplideSlide>
          </Splide>
        )}
      </div>
    </div>
  );
};

export default Team;

const TeamBox = ({ img, name, role }) => {
  return (
    <div className="flex justify-start max-w-[460px] items-center flex-col xl:pb-5 pb-8 p-5 gap-5 bg-[rgba(255,255,255,0.04)] rounded-[36px] min-h-0 xl:min-h-[434px] h-full">
      <img
        src={img}
        className="w-full rounded-[30px] h-[250px] object-cover"
        alt=""
      />
      <h3 className="text-white mt-5 uppercase font-bold text-[30px] leading-[30px]">
        {name}
      </h3>
      <p className="text-blue uppercase font-medium text-lg leading-[18px]">
        {role}
      </p>
    </div>
  );
};
