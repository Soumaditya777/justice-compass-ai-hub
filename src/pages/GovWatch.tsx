
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GovWatch = () => {
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
            <div className="text-center p-8">
              <p className="text-gray-600">
                Interactive map and data visualization coming soon...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GovWatch;
