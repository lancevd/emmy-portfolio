"use client";
import About from "@/components/home/About";
import Navbar from "@/components/home/Navbar";
import Welcome from "@/components/home/Welcome";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  });
  return (
    <main className="py-6 md:py-12">
      <Navbar />
      <br />
      <div className="spacer"></div>
      <Welcome />
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="contain">
        <div data-aos="fade-up" data-aos-duration="1000" className="bg-[#F6FCFF] w-[90%] mx-auto rounded-3xl overflow-hidden text-center">
          <img src="/images/mackup.png" alt="mackup" className=" w-full" />
        </div>
      </div>
      <About />
      <div className="spacer"></div>
      <div className="spacer"></div>
    </main>
  );
}
