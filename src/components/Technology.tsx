import { Database, Lock, Cpu } from "lucide-react";

export const Technology = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-light to-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powered by Technology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center animate-fade-up">
            <Database className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Blockchain Governance</h3>
            <p className="text-white/80">
              Transparent and immutable decision-making process
            </p>
          </div>
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <Lock className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
            <p className="text-white/80">
              Automated and secure execution of community decisions
            </p>
          </div>
          <div
            className="text-center animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Cpu className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Decentralized Identity
            </h3>
            <p className="text-white/80">
              Secure and private participation for all members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};