import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}
