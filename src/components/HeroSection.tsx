const HeroSection = () => {
  return (
    <div className="max-w_[1080px] relative flex flex-col justify-center mt-8 z-[999]">
      <div className="flex flex-col pt-36 gap-8 border-t border-r border-l border-gallery z-[2000]">
        <h1 className="text-5xl tracking-[-2.4px] font-semibold text-cod-gray text-center whitespace-nowrap">
          Build and deploy on the AI cloud
        </h1>
        <p className="text-center text-dove-gray text-[20px] text-balance">
          Get your subscriptions renewal notification immediately your
          subscription is about to renew by NotifyME
        </p>
        <div className="flex gap-4 justify-center">
          <button className="flex items-center rounded-[100px] bg-cod-gray text-white text-base font-s border hover:bg-[#383838] hover:border-gallery gap-1.5 py-3 px-4 cursor-pointer">
            <img src="./assets/vercel-white.svg" /> Get Started
          </button>
          <button className="flex items-center rounded-[100px] bg-white text-cod-gray text-base font-s border border-transparent hover:bg-[#f2f2f2] hover:border-gallery gap-1.5 py-3 px-[2.9rem] cursor-pointer">
            Get a Demo
          </button>
        </div>
      </div>
      <div className="grid w-full h-[350px] heroGradient">
        <div className="triangleRainbow"></div>
      </div>
      <div className="absolute inset-0 bottom-64">
        <img src="./assets/vercel-logo.svg" className="h-full w-full" />
      </div>

      <div className="h-[270px] flex items-center justify-center border border-gallery">
        <div className="flex h-full items-center justify-center flex-col tracking-[-1.28px] font-semibold text-[32px]">
          <span className="flex items-center gap-2">
            {" "}
            Develop with your favourite tools{" "}
            <img src="./assets/arrow-right.svg" />
          </span>
          <div className="flex gap-2">
            <span className="flex items-center gap-2">
              Launch globally, <img src="./assets/globe-icon.svg" />, Instantly
            </span>
            <span className="flex items-center gap-2">
              Keep pushing <img src="./assets/fork.svg" />
            </span>
          </div>
        </div>
      </div>
      <div className="border-l border-r border-gallery h-4">

      </div>
    </div>
  );
};
export default HeroSection;
