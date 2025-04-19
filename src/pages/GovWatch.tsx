
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const GovWatch = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | any[]>(null);

  // Mock projects data
  const mockProjects = [
    {
      id: 1,
      name: "Highway Construction Project",
      budget: "$12.5M",
      timeline: "24 months",
      riskScore: 85,
      riskLevel: "High",
      reasons: ["Budget 40% above average", "Timeline extensions", "Single bidder"]
    },
    {
      id: 2,
      name: "Public School Renovation",
      budget: "$2.8M",
      timeline: "10 months",
      riskScore: 25,
      riskLevel: "Low",
      reasons: ["Multiple bidders", "Standard costs", "Clear documentation"]
    },
    {
      id: 3,
      name: "City Water Treatment Facility",
      budget: "$8.2M",
      timeline: "18 months",
      riskScore: 62,
      riskLevel: "Medium",
      reasons: ["Budget 15% above average", "Unusual contractor selection process"]
    }
  ];

  const analyzeProjects = () => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setResults(mockProjects);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "Project risk assessment has been completed.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>GovWatch AI</CardTitle>
            <CardDescription>
              Monitor and analyze public projects for potential corruption risks
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!results ? (
              <div className="text-center p-8">
                <p className="text-gray-600 mb-4">
                  Analyze public project data for corruption risk indicators
                </p>
                <button
                  onClick={analyzeProjects}
                  disabled={isAnalyzing}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-400"
                >
                  {isAnalyzing ? "Analyzing..." : "Start Analysis"}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Risk Assessment Results</h3>
                  <button
                    onClick={() => setResults(null)}
                    className="text-sm text-purple-600 hover:underline"
                  >
                    New Analysis
                  </button>
                </div>
                
                <div className="space-y-4">
                  {results.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{project.name}</h4>
                          <div className="text-sm text-gray-500">
                            Budget: {project.budget} • Timeline: {project.timeline}
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          project.riskLevel === "High" ? "bg-red-100 text-red-800" : 
                          project.riskLevel === "Medium" ? "bg-yellow-100 text-yellow-800" : 
                          "bg-green-100 text-green-800"
                        }`}>
                          {project.riskLevel} Risk
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="text-sm font-medium">Risk Factors:</div>
                        <ul className="text-sm list-disc list-inside mt-1 text-gray-600">
                          {project.reasons.map((reason, index) => (
                            <li key={index}>{reason}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <button
                        onClick={() => toast({
                          title: "Detailed Report Available",
                          description: `Full analysis for ${project.name} can be accessed by authorized personnel.`
                        })}
                        className="mt-3 text-sm text-purple-600 hover:underline"
                      >
                        View Full Report
                      </button>
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

export default GovWatch;
