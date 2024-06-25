import Navbar from "@/components/home/Navbar";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="py-6 md:py-12">
      <Navbar />
      <br />
      <div className="spacer"></div>
      <Welcome />
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div
        className="contain w-[90%] mx-auto rounded-[2.5rem] overflow-hidden text-center"
      >
        <img
          src="/images/mackup.png"
          alt="mackup"
          className="bg-white w-full"
        />
      </div>
    </main>
  );
}
