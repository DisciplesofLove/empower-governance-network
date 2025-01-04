import { Shield, Users, Lightbulb, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Open governance and clear decision-making processes",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging technology for better governance",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Community-driven initiatives and collective wisdom",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Long-term vision for lasting positive impact",
  },
];

export const Values = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="group hover:shadow-lg transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <value.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};