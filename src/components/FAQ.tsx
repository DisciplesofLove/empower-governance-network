import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is The Decentralized Party?",
    answer: "The Decentralized Party is a community-driven organization that leverages blockchain technology to create transparent and effective governance systems.",
  },
  {
    question: "How can I participate in governance?",
    answer: "Members can participate by joining our community, submitting proposals, voting on initiatives, and contributing to working groups.",
  },
  {
    question: "What technology do you use?",
    answer: "We utilize blockchain technology, smart contracts, and decentralized identity solutions to ensure secure and transparent governance.",
  },
  {
    question: "How are decisions made?",
    answer: "Decisions are made through community consensus using our transparent voting system, with all votes recorded on the blockchain.",
  },
  {
    question: "Is membership open to everyone?",
    answer: "Yes, membership is open to anyone who shares our vision for transparent and innovative governance.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};