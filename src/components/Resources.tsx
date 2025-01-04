import { Card, CardContent } from "@/components/ui/card";
import { Book, Video, FileText, MessageSquare } from "lucide-react";

const resources = [
  {
    icon: Book,
    title: "Learning Hub",
    description: "Educational materials about blockchain governance and decentralized systems.",
    link: "#",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step guides on participating in our governance model.",
    link: "#",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive guides and technical documentation.",
    link: "#",
  },
  {
    icon: MessageSquare,
    title: "Community Forum",
    description: "Discuss ideas and collaborate with other members.",
    link: "#",
  },
];

export const Resources = () => {
  return (
    <section className="py-20 bg-secondary" id="resources">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <a
              href={resource.link}
              key={resource.title}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-200 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <resource.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};