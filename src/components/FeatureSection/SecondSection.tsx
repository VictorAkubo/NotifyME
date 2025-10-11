const SecondSection = () => {
  return (
    <section className="w-full bg-white flex flex-col ">
      <div className="p-12 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-dove-gray"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <use href="./assets/analytics.svg#analytics" />
          </svg>
          <h2 className="text-dove-gray text-base">Observability</h2>
        </div>
        <div className="text-dove-gray text-2xl font-medium leading-8 -tracking-[.96px] text-balance">
            <strong className="text-cod-gray font-semibold">Route-aware observability</strong>
            <p>Monitor and analyse the performance <span className="block"></span> and traffic of your projects</p>
        </div>
      </div>
      <div className="self-end">
<img src="/assets/analytics-large-light.avif" width="982" height="345" loading="lazy" className="pointer-events-none max-w-full h-auto"/>
      </div>
    </section>
  );
};
export default SecondSection;
