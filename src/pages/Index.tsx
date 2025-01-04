import { Hero } from "@/components/Hero";
import { Values } from "@/components/Values";
import { HowItWorks } from "@/components/HowItWorks";
import { Technology } from "@/components/Technology";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Values />
        <HowItWorks />
        <Technology />
      </main>
      <Footer />
    </div>
  );
};

export default Index;