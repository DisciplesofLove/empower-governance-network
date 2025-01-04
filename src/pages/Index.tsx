import { Hero } from "@/components/Hero";
import { Values } from "@/components/Values";
import { HowItWorks } from "@/components/HowItWorks";
import { Technology } from "@/components/Technology";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Governance } from "@/components/Governance";
import { Community } from "@/components/Community";
import { Resources } from "@/components/Resources";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Values />
        <HowItWorks />
        <Technology />
        <Governance />
        <Community />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;