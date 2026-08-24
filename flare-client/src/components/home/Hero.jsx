import { Button } from "../common/Button";

import heroImg from "../../assets/hero-img.webp";
import Flare from '../../assets/Flare.svg'

export function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-background flex flex-col items-center justify-center gap-2 px-4"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
        <img src={Flare} alt="" />
        <h1 className="text-2xl font-semibold">The Blockchain for Data</h1>
        <p className="text-dark text-center">Flare is a full-stack layer 1 solution designed for data intensive use cases.</p>
        <Button text="Connect" to='/connect' />
    </section>
  );
}
