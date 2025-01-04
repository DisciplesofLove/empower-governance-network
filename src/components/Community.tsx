import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Target, Rocket } from "lucide-react";

const initiatives = [
  {
    icon: Globe,
    title: "Global Chapters",
    description: "Join local chapters worldwide and connect with like-minded individuals.",
  },
  {
    icon: Users,
    title: "Working Groups",
    description: "Participate in specialized groups focused on specific governance aspects.",
  },
  {
    icon: Target,
    title: "Community Projects",
    description: "Contribute to ongoing initiatives that shape our collective future.",
  },
  {
    icon: Rocket,
    title: "Innovation Labs",
    description: "Experiment with new governance models and technological solutions.",
  },
];

export const Community = () => {
  return (
    <section className="py-20" id="community">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Community Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <Card
              key={initiative.title}
              className="group hover:shadow-lg transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <initiative.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};