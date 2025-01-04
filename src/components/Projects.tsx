import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Users, HandHeart } from "lucide-react";

const projects = [
  {
    title: "Community Governance Platform",
    description: "A blockchain-based platform enabling transparent community decision-making and resource allocation.",
    participants: 1240,
    fundingGoal: 50000,
    currentFunding: 32000,
    status: "Active",
  },
  {
    title: "Digital Identity Initiative",
    description: "Developing secure, decentralized digital identities for community members.",
    participants: 850,
    fundingGoal: 75000,
    currentFunding: 45000,
    status: "Active",
  },
  {
    title: "Local Economy Tokens",
    description: "Creating community-specific digital tokens to strengthen local economies.",
    participants: 620,
    fundingGoal: 30000,
    currentFunding: 28000,
    status: "Active",
  },
  {
    title: "Education & Training Hub",
    description: "Building an online platform for blockchain and governance education.",
    participants: 1500,
    fundingGoal: 40000,
    currentFunding: 15000,
    status: "Active",
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Active Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join our ongoing initiatives or contribute to their success. Every project is community-driven and aims to strengthen decentralized governance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Package className="h-5 w-5" />
                  <span className="text-sm font-medium">{project.status}</span>
                </div>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{project.participants.toLocaleString()} participants</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Funding Progress</span>
                      <span>{Math.round((project.currentFunding / project.fundingGoal) * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500 ease-in-out"
                        style={{ width: `${(project.currentFunding / project.fundingGoal) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${project.currentFunding.toLocaleString()}</span>
                      <span>${project.fundingGoal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button className="flex-1">
                  <Users className="mr-2 h-4 w-4" />
                  Join Project
                </Button>
                <Button variant="outline" className="flex-1">
                  <HandHeart className="mr-2 h-4 w-4" />
                  Donate
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};