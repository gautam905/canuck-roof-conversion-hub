
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Promotions from "@/components/Promotions";
import WarrantyFinance from "@/components/WarrantyFinance";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ContactFormAbove from "@/components/contactform-above";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <ContactFormAbove />
      <Promotions />
      <Features />
      <Services />
      <WarrantyFinance />
      <AboutUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
