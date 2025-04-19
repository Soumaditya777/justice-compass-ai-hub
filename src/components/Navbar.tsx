
import { Home, Scale, Shield, Map, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "LegalEase GPT", icon: Scale, path: "/legal-ease" },
    { name: "WhistleSafe", icon: Shield, path: "/whistle-safe" },
    { name: "GovWatch", icon: Map, path: "/gov-watch" },
    { name: "Justice Map", icon: Map, path: "/justice-map" },
    { name: "Legal Aid", icon: MessageSquare, path: "/legal-aid" },
    { name: "Connect", icon: Users, path: "/connect" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Justice Compass</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
