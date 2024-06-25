import About from "@/components/home/About";
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
      <div className="contain">
        <div className="bg-[#F6FCFF] w-[90%] mx-auto rounded-3xl overflow-hidden text-center">
          <img src="/images/mackup.png" alt="mackup" className=" w-full" />
        </div>
      </div>
      <About />
    </main>
  );
}
