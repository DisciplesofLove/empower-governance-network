import { Vote, FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Participate",
    description: "Join our community and make your voice heard",
  },
  {
    icon: FileText,
    title: "Propose",
    description: "Submit your ideas for community improvement",
  },
  {
    icon: Vote,
    title: "Vote",
    description: "Cast your vote on community proposals",
  },
  {
    icon: CheckCircle,
    title: "Implement",
    description: "Watch as approved proposals become reality",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4 relative z-10">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};