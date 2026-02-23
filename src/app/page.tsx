"use client";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import CTA from "@/components/sections/CTA";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#111821] text-slate-100">
      <Header />
      <div className="reveal"><Hero /></div>
      <div className="reveal"><Features /></div>
      <div className="reveal"><Pricing /></div>
      <div className="reveal"><Security /></div>
      <div className="reveal"><CTA /></div>
      <Footer />
    </main>
  );
}


