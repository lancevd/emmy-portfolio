import React from "react";
import { LuMoveRight } from "react-icons/lu";
import { RiBehanceFill, RiDribbbleLine, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="py-4 contain">
      <h2 className="text-center">
        Lets create <span className="text-span">
          remarkable <br /> Projects </span> 
        together
      </h2>
      <br />
      <p className="text-xs md:text-sm lg:w-1/2 md:w-2/3 text-center mx-auto">
        If you have a project you would like help with or want to talk about
        product design, you can drop a message for me @
        <span>
          <a
            href="mailto:emmanuelotitoola@gmail.com"
            target="_blank"
            className="text-white"
          >
            Emmanuelotitoola@gmail.com
          </a>
        </span>
        . I am currently available for any SaaS project, dashboard design or
        landing pages gigs.
      </p>
      <br />
      <a
        href="mailto:Emmanuelotitoola@gmail.com"
        target="_blank"
        className="md:w-[60%] mx-auto block"
      >
        <button className="w-full bg-[var(--orange)] p-4 rounded-[2rem] text-[#454545] flex items-center justify-between gap-4">
          Get your designs now <LuMoveRight />
        </button>
      </a>
      <br />
      <div className="contain">
        <img src="/images/footer.png" alt="footer" />
      </div>
      <br />
      <hr />
      <br />
      <div className="flex flex-col lg:flex-row justify-center gap-5 lg:justify-between items-center">
        <p className="text-xs lg:w-1/4">
          I am a product Designer that produce creative, easy to use solutions
          for you and your users
        </p>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/emmanuel-otitoola-212a77113/"
            target="_blank"
            className="mx-2"
          >
            <RiLinkedinFill />
          </a>
          <a
            href="https://dribbble.com/Otitoola"
            target="_blank"
            className="mx-2"
          >
            <RiDribbbleLine />
          </a>
          <a
            href="https://www.behance.net/Emmynick"
            target="_blank"
            className="mx-2"
          >
            <RiBehanceFill />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
