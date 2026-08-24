import man from "../../assets/man.webp";
import woman from "../../assets/woman.webp";

import group1 from "../../assets/group1.webp";
import group2 from "../../assets/group2.webp";
import group3 from "../../assets/group3.webp";

import builders from "../../assets/builders.webp";
import flaremeeting from "../../assets/flaremeeting.webp";
import conference from "../../assets/conference.webp";

const groups = [
  {
    tallLeft: man,
    leftImages: [group1, group2, group3],
    tallRight: woman,
    rightImages: [builders, flaremeeting, conference],
  },
];

export function Community() {
  return (
    <section className="pb-16">
      <p className="my-12 text-center text-2xl">Community</p>
      <div className="w-full overflow-hidden">
        <div className="image-marquee flex w-max">
          {[...groups, ...groups].map((group, index) => (
            <div
              key={index}
              className="grid h-125 w-225 shrink-0 grid-cols-4 grid-rows-3 gap-4 mr-4"
            >
              {/* Tall left image */}
              <img
                src={group.tallLeft}
                alt=""
                className="row-span-3 h-full w-full rounded-xl object-cover"
              />

              {/* Left column images */}
              {group.leftImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="h-full w-full rounded-xl object-cover"
                />
              ))}

              {/* Tall right image */}
              <img
                src={group.tallRight}
                alt=""
                className="row-span-3 h-full w-full rounded-xl object-cover"
              />

              {/* Right column images */}
              {group.rightImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="h-full w-full rounded-xl object-cover"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
