import {aiGatewayImageUrl} from "../../constants.ts";
const ThirdSection = () => {
  return (
    <section className="w-full flex">
      <div className="p-12 flex flex-col gap-4 flex-1 border border-gallery">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-dove-gray"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <use href="./assets/golden-gate.svg#golden-gate" />
          </svg>
          <h2 className="text-dove-gray text-base">Vercel AI Gateway</h2>
        </div>
        <div className="text-dove-gray text-2xl font-medium leading-8 -tracking-[.96px] text-balance">
            <strong className="text-cod-gray font-semibold">Display in seconds {" "}</strong>
            <p className="inline text-balance">Monitor and analyse the performance and traffic of your projects work faster than you thought and analyze </p>
        </div>
        <div>
            <img src={aiGatewayImageUrl}/>
            </div>
      </div>
      <div className="p-12 flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-dove-gray"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <use href="./assets/clock-rewind.svg#clock-rewind" />
          </svg>
          <h2 className="text-dove-gray text-base">Vercel AI Gateway</h2>
        </div>
                <div className="text-dove-gray text-2xl font-medium leading-8 -tracking-[.96px] text-balance">
            <strong className="text-cod-gray font-semibold">Display in seconds {" "}</strong>
            <p className="inline text-balance">Monitor and analyse the performance and traffic of your projects work faster</p>
        </div>
        <div className="flex flex-col">
          <div className="bg-white flex justify-between w-fit gap-6 rollbacksShadow border border-dotted border-[#00000014] rounded-xl p-3">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-dove-gray text-sm leading-5">vercel-site/<strong className="text-dove-gray">jvjb4ynna</strong></span>
                <span className="text-dove-gray text-sm leading-4">1d ago</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/assets/view.svg"/>
                <span className="text-cod-gray text-[13px] leading-3.5">ba5f55f</span>
                <span className="text-cod-gray text-sm leading-5">update bento box design</span>
              </div>
            </div>
            <div className="flex items-center relative">
              <img src="/assets/ring-blue.svg"/>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">90</p>
            </div>
          </div>
          <div className="relative flex justify-center mt-2">
            <img src="/assets/curve-line.svg"/>
            <div className="bg-white w-[30px] h-[30px] rounded-full lineShadow absolute top-1/2 left-1/2 center flex justify-center items-center ">
              <img src="/assets/history-icon.svg"/>
            </div>
          </div>
          <div className="bg-white flex justify-between w-fit gap-6 rollbacksShadow border border-dotted border-[#00000014] rounded-xl p-3 self-end">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-dove-gray text-sm leading-5">vercel-site/<strong className="text-dove-gray">jvjb4ynna</strong></span>
                <span className="text-dove-gray text-sm leading-4">1d ago</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/assets/view.svg"/>
                <span className="text-cod-gray text-[13px] leading-3.5">ba5f55f</span>
                <span className="text-cod-gray text-sm leading-5">update bento box design</span>
              </div>
            </div>
            <div className="flex items-center relative">
              <img src="/assets/ring-red.svg"/>
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">55</p>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};
export default ThirdSection;
