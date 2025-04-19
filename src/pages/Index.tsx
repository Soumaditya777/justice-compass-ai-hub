
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Shield, Map, MessageSquare, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "LegalEase GPT",
    description: "Your personal AI legal assistant that explains rights and procedures in simple terms",
    icon: Scale,
    path: "/legal-ease",
  },
  {
    title: "WhistleSafe",
    description: "Anonymous platform for reporting corruption and injustice",
    icon: Shield,
    path: "/whistle-safe",
  },
  {
    title: "GovWatch AI",
    description: "AI-powered corruption risk detector for public projects",
    icon: TrendingUp,
    path: "/gov-watch",
  },
  {
    title: "Justice Access Heatmap",
    description: "Interactive map showing areas with limited access to legal resources",
    icon: Map,
    path: "/justice-map",
  },
  {
    title: "Legal Aid Chatbot",
    description: "Quick assistance for common legal issues with document templates",
    icon: MessageSquare,
    path: "/legal-aid",
  },
  {
    title: "Lawyer-Client Connect",
    description: "Connect with verified legal professionals and law students",
    icon: Users,
    path: "/connect",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Justice Compass AI Hub</h1>
          <p className="text-xl mb-8">Empowering citizens with accessible legal resources and transparency</p>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link key={module.title} to={module.path}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <module.icon className="h-6 w-6 text-purple-600" />
                    <CardTitle>{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{module.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
