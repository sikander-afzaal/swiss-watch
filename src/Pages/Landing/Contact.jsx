import HeadingComp from "../../Components/HeadingComp";
import Button from "../../Components/Button";

const Contact = () => {
  return (
    <div id="contact" className="full mt-[80px] xl:mt-[140px] px-5">
      <HeadingComp sub="Contact" head="Get in Touch" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-[rgba(255,255,255,0.06)] gap-[20px] mt-[30px] rounded-[24px] flex justify-start items-start flex-col w-full max-w-[704px] p-5 sm:p-7"
      >
        <div className="w-full justify-start items-start flex gap-[20px] sm:gap-3 sm:flex-row flex-col">
          <div className="flex justify-start items-start flex-col w-full gap-2">
            <label htmlFor="first" className="text-white text-sm font-normal">
              First Name
            </label>
            <input
              type="text"
              id="first"
              placeholder="First Name"
              className="bg-[rgba(255,255,255,0.04)] w-full h-[54px] rounded text-[rgba(255,255,255,0.48)] text-sm font-normal border-none outline-none pl-2"
            />
          </div>
          <div className="flex justify-start items-start flex-col w-full gap-2">
            <label htmlFor="last" className="text-white text-sm font-normal">
              Last Name
            </label>
            <input
              type="text"
              id="last"
              placeholder="Last Name"
              className="bg-[rgba(255,255,255,0.04)] w-full h-[54px] rounded text-[rgba(255,255,255,0.48)] text-sm font-normal border-none outline-none pl-2"
            />
          </div>
        </div>
        <div className="w-full justify-start items-start flex gap-[20px] sm:gap-3 sm:flex-row flex-col">
          <div className="flex justify-start items-start flex-col w-full gap-2">
            <label htmlFor="email" className="text-white text-sm font-normal">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="bg-[rgba(255,255,255,0.04)] w-full h-[54px] rounded text-[rgba(255,255,255,0.48)] text-sm font-normal border-none outline-none pl-2"
            />
          </div>
          <div className="flex justify-start items-start flex-col w-full gap-2">
            <label htmlFor="phone" className="text-white text-sm font-normal">
              phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              className="bg-[rgba(255,255,255,0.04)] w-full h-[54px] rounded text-[rgba(255,255,255,0.48)] text-sm font-normal border-none outline-none pl-2"
            />
          </div>
        </div>
        <div className="flex justify-start items-start flex-col w-full gap-2">
          <label htmlFor="Country" className="text-white text-sm font-normal">
            Country
          </label>
          <input
            type="text"
            id="Country"
            placeholder="Country"
            className="bg-[rgba(255,255,255,0.04)] w-full h-[54px] rounded text-[rgba(255,255,255,0.48)] text-sm font-normal border-none outline-none pl-2"
          />
        </div>
        <div className="flex justify-start items-start flex-col w-full gap-2">
          <label htmlFor="email" className="text-white text-sm font-normal">
            Message
          </label>
          <textarea
            id="email"
            placeholder="Message"
            className="bg-[rgba(255,255,255,0.04)] resize-none h-[120px] w-full rounded text-[rgba(255,255,255,0.48)] text-sm font-normal pt-2 border-none outline-none pl-2"
          />
        </div>
        <Button
          name="GET STARTED NOW"
          classes={"bg-blue border-none font-medium text-lg w-full mt-2"}
        />
      </form>
    </div>
  );
};

export default Contact;
