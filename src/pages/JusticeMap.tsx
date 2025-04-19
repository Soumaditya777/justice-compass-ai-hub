
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const JusticeMap = () => {
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
            <div className="text-center p-8">
              <p className="text-gray-600">
                Interactive heatmap visualization coming soon...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JusticeMap;
