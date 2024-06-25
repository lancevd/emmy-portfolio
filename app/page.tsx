import Navbar from "@/components/home/Navbar";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="py-6 md:py-12">
      <Navbar />
      <br />
      <div className="spacer"></div>
      <Welcome />
    </main>
  );
}
