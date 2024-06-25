import { LuMoveRight } from "react-icons/lu";

const Welcome = () => {
  return (
    <section className="w-full md:w-2/3 xl:w-1/3 mx-auto p-4 md:p-0">
      <h1 className="text-center text-white">
        Get your
        <span className="text-span">
          {" "}
          Professional designs and Experiences{" "}
        </span>
        Quickly
      </h1>
      <br />
      <div className="text-center">
        Forget Complex contracts, delays and talent acquisition. Get the best,
        functional, modern and easy to use design right now.
      </div>
      <br />
      <a
        href="mailto:Emmanuelotitoola@gmail.com"
        target="blank"
        className="w-[60%] mx-auto"
      >
        <button className="w-full bg-[var(--orange)] p-4 rounded-[2rem] text-[#454545] flex items-center justify-between gap-4">
          Get your designs now <LuMoveRight />
        </button>
      </a>
    </section>
  );
};

export default Welcome;
