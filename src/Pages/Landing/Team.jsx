import HeadingComp from "../../Components/HeadingComp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  return (
    <div id="team" className="full relative mt-[70px] xl:mt-[150px] ">
      <div className="absolute rounded-full top-[20%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  right-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-3 text-center">
        <HeadingComp head="Swiss Cryptowatch  Team" sub="" />
        <p className="text-white text-base sm:text-[20px] leading-[30px] ">
          Please join our discord to get involved with the community and receive
          exclusive updates.
        </p>
        {window.innerWidth > 1280 ? (
          <div className="grid mt-[50px] grid-cols-3 w-full gap-6">
            <TeamBox
              img="/team3.jpg"
              xing
              social="https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fprofile%2FRonald_Grob&signup_channel=profileapp"
              name="Ronald"
              role="Founder"
            />
            <TeamBox
              img="/team2.jpg"
              social="https://www.linkedin.com/in/daniel-labhart-258b8a6/"
              name="Daniel"
              role="Consultant"
            />
            <TeamBox img="/team1.jpg" name="Micha" role="Designer" />
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
              <TeamBox
                img="/team3.jpg"
                xing
                social="https://login.xing.com/?dest_url=https%3A%2F%2Fwww.xing.com%2Fprofile%2FRonald_Grob&signup_channel=profileapp"
                name="Ronald"
                role="Founder"
              />
            </SplideSlide>
            <SplideSlide>
              <TeamBox
                img="/team2.jpg"
                social="https://www.linkedin.com/in/daniel-labhart-258b8a6/"
                name="Daniel"
                role="Consultant"
              />
            </SplideSlide>
            <SplideSlide>
              <TeamBox img="/team1.jpg" name="Micha" role="Designer" />
            </SplideSlide>
          </Splide>
        )}
        <div
          id="details"
          className="flex justify-between gap-[60px] lg:flex-row flex-col -mb-12 sm:mb-[0px]  xl:mb-[120px] items-center w-full mt-[200px] sm:mt-[250px] xl:mt-[220px]"
        >
          <div className="flex gap-5 items-center justify-start text-center lg:text-left lg:items-start flex-col">
            <h6 className="text-blue font-bold sm:text-[45px] xl:text-[60px] text-[35px] leading-[44px] sm:leading-[68px] ">
              Company Details
            </h6>
            <p className="text-white   leading-[1.8]text-sm sm:text-lg font-semibold">
              Swiss Crypto Watch is a brand of RG Watches & Jewelry GmbH,
              Summelenweg 91, 8808 Pfäffikon/Switzerland
            </p>
            <p className="text-white   leading-[1.8]text-sm sm:text-lg font-semibold">
              Official register number CHE-307.000.557
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.072673070932!2d8.762480899999998!3d47.1955901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab1591c393c1d%3A0xd1d92b6086bbe480!2sSummelenweg%2091%2C%208808%20Pf%C3%A4ffikon%2C%20Switzerland!5e0!3m2!1sen!2s!4v1672929555612!5m2!1sen!2s"
            className="w-full max-w-[700px] aspect-square xl:aspect-video object-contain"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Team;

const TeamBox = ({ img, name, role, social, xing }) => {
  return (
    <div className="flex justify-start max-w-[460px] max-h-[450px] items-center flex-col xl:pb-5 pb-8 p-5 gap-5 bg-[rgba(255,255,255,0.04)] rounded-[36px] min-h-0 xl:min-h-[434px] h-full">
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
      <div className="flex justify-center items-center gap-2">
        <a
          href={social}
          target={"blank"}
          className="no-underline text-blue text-2xl"
        >
          <FontAwesomeIcon icon={xing ? faXing : faLinkedin} />
        </a>
      </div>
    </div>
  );
};
