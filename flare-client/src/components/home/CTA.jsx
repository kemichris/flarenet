import { Button } from "../common/Button";

import cta from "../../assets/call.webp";

export function CTA() {
  return (
    <section>
      <p className="my-12 text-center text-2xl">Particiapate in Flare</p>

      <div
        className=" bg-cover bg-center py-8 px-4 lg:h-120 md:h-100 h-80 flex flex-col justify-between"
        style={{ backgroundImage: `url(${cta})` }}
      >
        <h2 className="uppercase text-3xl lg:text-7xl md:text-5xl text-primary font-semibold w-[70%] lg:w-[50%] md:w-[50%]">
          Your XRP is now in play
        </h2>
        <Button text="Earn Yield" to="/yield" className="w-fit mx-auto" />
      </div>
    </section>
  );
}
