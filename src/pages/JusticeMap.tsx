
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const JusticeMap = () => {
  const { toast } = useToast();
  const [mapLoaded, setMapLoaded] = useState(false);

  // Mock data for justice access levels across different regions
  const regions = [
    { id: 1, name: "North Region", access: "Low", color: "bg-red-500" },
    { id: 2, name: "South Region", access: "Medium", color: "bg-yellow-500" },
    { id: 3, name: "East Region", access: "High", color: "bg-green-500" },
    { id: 4, name: "West Region", access: "Low", color: "bg-red-500" },
    { id: 5, name: "Central Region", access: "Medium", color: "bg-yellow-500" },
  ];

  const loadMap = () => {
    setMapLoaded(true);
    toast({
      title: "Map Loaded",
      description: "Justice access data has been visualized.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Justice Access Heatmap</CardTitle>
            <CardDescription>
              Explore areas with limited access to legal resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!mapLoaded ? (
              <div className="text-center p-8">
                <p className="text-gray-600 mb-4">
                  Click to load the interactive heatmap visualization
                </p>
                <button 
                  onClick={loadMap}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Load Heatmap
                </button>
              </div>
            ) : (
              <div className="p-4">
                <div className="mb-6">
                  <div className="flex items-center justify-end space-x-2 mb-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded mr-1"></div>
                      <span className="text-sm">Low Access</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded mr-1"></div>
                      <span className="text-sm">Medium Access</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded mr-1"></div>
                      <span className="text-sm">High Access</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 gap-1 p-4 bg-gray-100">
                      {regions.map(region => (
                        <div 
                          key={region.id} 
                          className={`${region.color} p-6 rounded-lg text-white shadow hover:opacity-90 transition-opacity cursor-pointer`}
                          onClick={() => toast({
                            title: region.name,
                            description: `Justice Access Level: ${region.access}`,
                          })}
                        >
                          <p className="font-medium">{region.name}</p>
                          <p>{region.access} Access</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Deploy mobile legal clinics in North and West regions</li>
                    <li>Conduct awareness drives in areas with low access</li>
                    <li>Increase number of legal aid centers in underserved areas</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JusticeMap;
