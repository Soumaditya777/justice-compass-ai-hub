
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const WhistleSafe = () => {
  const { toast } = useToast();
  const [report, setReport] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted",
      description: "Your report has been anonymously submitted for review.",
    });
    setReport("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>WhistleSafe</CardTitle>
            <CardDescription>
              Anonymously report corruption or injustice with our secure platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={report}
                onChange={(e) => setReport(e.target.value)}
                placeholder="Describe the incident in detail..."
                className="w-full h-48 p-2 border rounded-md"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Submit Report
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhistleSafe;
