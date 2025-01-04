import { Scale, Vote, Users, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const models = [
  {
    icon: Scale,
    title: "Democratic Decision Making",
    description: "Every member has an equal voice in shaping our future through secure voting mechanisms.",
  },
  {
    icon: Vote,
    title: "Transparent Voting",
    description: "All votes are recorded on the blockchain, ensuring complete transparency and accountability.",
  },
  {
    icon: Users,
    title: "Community Consensus",
    description: "Major decisions require broad community support to move forward.",
  },
  {
    icon: FileCheck,
    title: "Smart Contract Automation",
    description: "Automated execution of community decisions through secure smart contracts.",
  },
];

export const Governance = () => {
  return (
    <section className="py-20 bg-secondary" id="governance">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Governance Model
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <Card
              key={model.title}
              className="group hover:shadow-lg transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <model.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};