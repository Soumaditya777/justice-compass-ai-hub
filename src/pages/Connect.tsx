
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Connect = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    legalDomain: "",
    language: "",
    experience: "",
    availability: ""
  });
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Mock lawyers data
  const mockLawyers = [
    {
      id: 1,
      name: "Adv. Priya Sharma",
      specialty: "Criminal Law",
      languages: ["English", "Hindi"],
      experience: "15 years",
      location: "Delhi",
      availability: "Mon-Fri",
      pro_bono: true,
      image: "https://source.unsplash.com/random/100x100/?portrait,woman"
    },
    {
      id: 2,
      name: "Adv. Rahul Verma",
      specialty: "Civil Law",
      languages: ["English", "Gujarati"],
      experience: "8 years",
      location: "Mumbai",
      availability: "Weekends",
      pro_bono: false,
      image: "https://source.unsplash.com/random/100x100/?portrait,man"
    },
    {
      id: 3,
      name: "Adv. Meera Patel",
      specialty: "Family Law",
      languages: ["English", "Punjabi", "Hindi"],
      experience: "12 years",
      location: "Chandigarh",
      availability: "Mon-Sat",
      pro_bono: true,
      image: "https://source.unsplash.com/random/100x100/?portrait,woman"
    },
    {
      id: 4,
      name: "Ankit Kumar",
      specialty: "Corporate Law",
      languages: ["English", "Bengali"],
      experience: "Law Student (5th year)",
      location: "Kolkata",
      availability: "Weekends",
      pro_bono: true,
      image: "https://source.unsplash.com/random/100x100/?portrait,student"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      setSearchInitiated(true);
      setIsSearching(false);
      
      toast({
        title: "Search Complete",
        description: "Found legal professionals matching your criteria.",
      });
    }, 1500);
  };

  const handleContact = (lawyer: any) => {
    toast({
      title: "Contact Request Sent",
      description: `Your request to connect with ${lawyer.name} has been sent.`,
    });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Lawyer-Client Connect</CardTitle>
            <CardDescription>
              Find verified legal professionals and law students ready to help
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Legal Domain
                  </label>
                  <select
                    name="legalDomain"
                    value={filters.legalDomain}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Any Domain</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="civil">Civil Law</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="property">Property Law</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Language
                  </label>
                  <select
                    name="language"
                    value={filters.language}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Any Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="punjabi">Punjabi</option>
                    <option value="gujarati">Gujarati</option>
                    <option value="bengali">Bengali</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Experience
                  </label>
                  <select
                    name="experience"
                    value={filters.experience}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Any Experience</option>
                    <option value="student">Law Student</option>
                    <option value="junior">1-5 Years</option>
                    <option value="mid">6-10 Years</option>
                    <option value="senior">10+ Years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select
                    name="availability"
                    value={filters.availability}
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Any Time</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="evenings">Evenings Only</option>
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location, specialization, or keywords..."
                  className="flex-1 p-2 border rounded-md"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-400"
                >
                  {isSearching ? "Searching..." : "Find Legal Help"}
                </button>
              </div>
            </form>
            
            {searchInitiated && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Legal Professionals Available</h3>
                
                <div className="space-y-4">
                  {mockLawyers.map(lawyer => (
                    <div key={lawyer.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex">
                        <div className="mr-4">
                          <img 
                            src={lawyer.image} 
                            alt={lawyer.name} 
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{lawyer.name}</h4>
                              <p className="text-sm text-gray-600">{lawyer.specialty} • {lawyer.experience}</p>
                              <p className="text-sm text-gray-600">
                                Languages: {lawyer.languages.join(", ")}
                              </p>
                              <p className="text-sm text-gray-600">
                                Location: {lawyer.location} • Available: {lawyer.availability}
                              </p>
                            </div>
                            {lawyer.pro_bono && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                Pro Bono Available
                              </span>
                            )}
                          </div>
                          <div className="mt-3 flex justify-between items-center">
                            <button
                              onClick={() => handleContact(lawyer)}
                              className="bg-purple-600 text-white px-3 py-1 text-sm rounded hover:bg-purple-700"
                            >
                              Request Contact
                            </button>
                            <button
                              onClick={() => toast({
                                title: "Profile Viewed",
                                description: `You are viewing ${lawyer.name}'s full profile.`
                              })}
                              className="text-purple-600 text-sm hover:underline"
                            >
                              View Full Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Connect;
