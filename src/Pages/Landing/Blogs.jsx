import HeadingComp from "../../Components/HeadingComp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Button from "../../Components/Button";

const Blogs = () => {
  return (
    <div className="full mt-[170px] xl:mt-[150px] relative">
      <div className="absolute rounded-full -top-[10%] -z-10 bg-blue lg:block hidden opacity-[0.18] blur-[150px]  left-0 w-[700px] h-[700px]"></div>
      <div className="section flex-col gap-3 text-center">
        <HeadingComp head="Latest News" sub="" />

        {window.innerWidth > 1280 ? (
          <div className="grid items-stretch mt-[50px] grid-cols-3 w-full gap-6">
            <BlogBox
              img="/blog1.png"
              head="Twitter - 9 Week Campaign - Competition"
              date="16 june 2022"
            />
            <BlogBox
              img="/blog1.png"
              head="Twitter - 9 Week Campaign - Competition"
              date="16 june 2022"
            />
            <BlogBox
              img="/blog1.png"
              head="Twitter - 9 Week Campaign - Competition"
              date="16 june 2022"
            />
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
              gap: "20px",
            }}
            className="slider-arrows slider-center mt-[30px]"
          >
            <SplideSlide>
              <BlogBox
                img="/blog1.png"
                head="Twitter - 9 Week Campaign - Competition"
                date="16 june 2022"
              />
            </SplideSlide>
            <SplideSlide>
              <BlogBox
                img="/blog1.png"
                head="Twitter - 9 Week Campaign - Competition"
                date="16 june 2022"
              />
            </SplideSlide>
            <SplideSlide>
              <BlogBox
                img="/blog1.png"
                head="Twitter - 9 Week Campaign - Competition"
                date="16 june 2022"
              />
            </SplideSlide>
          </Splide>
        )}
        <Button name="View More" classes="hidden xl:block mt-[40px]" />
      </div>
    </div>
  );
};

export default Blogs;

const BlogBox = ({ img, date, head }) => {
  return (
    <div className="flex w-full xl:max-w-none max-w-[400px] justify-start items-start flex-col pb-4 xl:pb-7 overflow-hidden rounded-[24px] shadow-blogShadow bg-[rgba(255,255,255,0.08)]">
      <img src={img} className="object-cover w-full h-[260px]" alt="" />
      <div className="flex justify-start items-start gap-3 px-5 flex-col text-left mt-4">
        <h4 className="text-blue font-semibold uppercase text-sm leading-[14px]">
          {date}
        </h4>
        <h2 className="text-white ont-semibold  text-[18px] xl:text-[28px] leading-[26px] xl:leading-[36px]">
          {head}
        </h2>
      </div>
    </div>
  );
};
