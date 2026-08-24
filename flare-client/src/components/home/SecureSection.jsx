import { ProgressCircle } from "./ProgressCircle";
import secure from "../../assets/secure.webm";

export function SecureSection() {
  return (
    <section className="px-8 py-8 ">
       <p className="text-3xl lg:text-9xl md:text-5xl text-center mb-8 font-medium ">
          Secure Network
        </p>
      <div className="flex items-center bg-white gap-4">
        <video
        autoPlay
        loop
        muted
        playsInline
        src={secure}
        className="w-[30%] lg:w-[50%] md:w-[50%]"
      ></video>
      <div>
        <div className="flex items-center gap-2">
          <ProgressCircle />
          <div>
            <p className="text-2xl lg:text-4xl md:text-3xl  font-medium ">
            Flare Staked
          </p>
          <p className="">
            of which 97% is from the community
          </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
