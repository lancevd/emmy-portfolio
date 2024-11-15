import React from "react";
import Marquee from "react-fast-marquee";
import { LuMoveRight } from "react-icons/lu";

const slides = [
  "/images/slide-1.png",
  "/images/slide-2.png",
  "/images/slide-3.png",
  "/images/slide-2.png",
];

const RecentWorks = () => {
  return (
    <div className="text-center contain">
      <h2 className="text-[#454545] text-center">Recent Works</h2>
      <br />
      <p className="text-center mx-auto w-full lg:w-1/2">
        Get your Design delivered in record time. Forget about unreliable
        freelancers, extremely expensive agencies and Designs that are easy to
        use.
      </p>
      <br />
      <br />
      <Marquee speed={40}>
        <div className="w-full flex gap-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full border mx-4 rounded-2xl overflow-hidden"
            >
              <img src={slide} alt={`slide-${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </Marquee>
      <br />
      <a
        href="https://dribbble.com/Otitoola"
        target="_blank"
        rel="noopener noreferrer"
      className="mx-auto text-center w-fit flex justify-center items-center"
      >
        <button className="bg-[var(--orange)] p-4 rounded-[2rem] text-[#454545] flex items-center justify-between gap-12">
          View portfolio <LuMoveRight />
        </button>
      </a>
    </div>
  );
};

export default RecentWorks;
