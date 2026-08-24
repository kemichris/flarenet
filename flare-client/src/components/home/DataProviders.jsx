import data from "../../assets/data.webm";

export function DataProviders() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center md:flex-row md:items-center bg-primary px-8 py-8 gap-4">
      <div>
        <p className="text-4xl text-center  lg:text-9xl md:text-5xl lg:text-left md:text-left font-medium text-white">Decentralized</p>
        <p className="text-2xl text-center lg:text-4xl md:text-3xl lg:text-left md:text-left font-medium text-white">100 Data Providers</p>
        <p className="text-white text-center lg:text-left md:text-left">3.3% maximum stake per data provider</p>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        src={data}
        className="w-full lg:w-[50%] md:w-[50%]"
      ></video>
    </section>
  );
}
