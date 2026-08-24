import city from "../../assets/city.webm";
import Flare from "../../assets/Flare.svg";

const technologies = [
  {
    title: "Enshrined Data Protocols",
    description:
      "Flare’s protocols are integrated into the blockchain's core, and inherit the economic security of the entire network.",
  },
  {
    title: "Ethereum Virtual Machine",
    description:
      "Flare is EVM compatible with out-of-the-box support for all your favorite tooling.",
  },
  {
    title: "Flare Stake",
    description:
      "Flare uses a proof-of-stake (PoS) mechanism to ensure a significant and consistent level of economic security.",
  },
];

export function TechnologySection() {
  return (
    <section className=" mt-16 px-8">
      <img src={Flare} alt="" className="w-10 mx-auto mb-6" />
      <div className="flex flex-col lg:flex-row md:flex-row items-center">
        <div className="">
          <p className="uppercase text-dark text-sm mb-8 lg:text-left md:text-left text-center">Foundational technology</p>

          <div>
            {technologies.map((technology) => (
              <div key={technology.title} className="mb-4">
                <h3 className="mb-2 text-lg font-medium lg:text-left md:text-left text-center">{technology.title}</h3>
                <p className="text-dark lg:text-left md:text-left text-center">{technology.description}</p>
              </div>
            ))}
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          src={city}
          className="w-full lg:w-[50%] md:w-[50%]"
        ></video>
      </div>
    </section>
  );
}
