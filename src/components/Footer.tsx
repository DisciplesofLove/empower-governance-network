import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">The Decentralized Party</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Empowering communities through transparent and innovative governance.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-sm text-gray-600 hover:text-primary dark:text-gray-300">
                About Us
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-primary dark:text-gray-300">
                How It Works
              </a>
              <a href="#technology" className="text-sm text-gray-600 hover:text-primary dark:text-gray-300">
                Technology
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <nav className="flex flex-col space-y-2">
              <a href="mailto:contact@decentralizedparty.org" className="text-sm text-gray-600 hover:text-primary dark:text-gray-300">
                contact@decentralizedparty.org
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} The Decentralized Party. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};