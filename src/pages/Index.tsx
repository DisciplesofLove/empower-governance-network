import { Hero } from "@/components/Hero";
import { Values } from "@/components/Values";
import { HowItWorks } from "@/components/HowItWorks";
import { Technology } from "@/components/Technology";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Values />
      <HowItWorks />
      <Technology />
    </div>
  );
};

export default Index;