
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const WhistleSafe = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [report, setReport] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [anonymous, setAnonymous] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      toast({
        title: "Report Submitted",
        description: "Your report has been anonymously submitted for review.",
      });
      setIsSubmitting(false);
      setStep(3); // Move to confirmation step
    }, 1500);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              This platform allows you to anonymously report corruption or injustice incidents.
              Your report will be analyzed and prioritized based on credibility factors.
            </p>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category of Incident
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="corruption">Corruption</option>
                  <option value="fraud">Fraud</option>
                  <option value="harassment">Harassment</option>
                  <option value="discrimination">Discrimination</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location (Optional)
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, State or Organization"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                  className="h-4 w-4 text-purple-600 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                  Keep my report anonymous
                </label>
              </div>
            </div>
            
            <button
              onClick={() => category ? setStep(2) : toast({ title: "Please select a category" })}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-full"
            >
              Continue
            </button>
          </div>
        );
      
      case 2:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-purple-600 hover:underline text-sm mb-2 inline-flex items-center"
            >
              ← Back to details
            </button>
            
            <textarea
              value={report}
              onChange={(e) => setReport(e.target.value)}
              placeholder="Describe the incident in detail. Include what happened, when it happened, who was involved, and any evidence you may have."
              className="w-full h-48 p-2 border rounded-md"
              required
            />
            
            <div className="text-sm text-gray-500 italic">
              Your report will be anonymized and analyzed by our AI for credibility before being forwarded to relevant authorities.
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !report.trim()}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-400 w-full"
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </button>
          </form>
        );
      
      case 3:
        return (
          <div className="text-center space-y-4">
            <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-lg font-medium text-gray-900">Report Successfully Submitted</h3>
            
            <p className="text-gray-600">
              Your report has been securely submitted. It will be analyzed for credibility and patterns before being forwarded to the appropriate authorities.
            </p>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-sm text-gray-500 mb-2">Report ID for reference (save this):</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-purple-700 font-mono">WS-{Math.random().toString(36).substring(2, 10).toUpperCase()}</code>
            </div>
            
            <button
              onClick={() => {
                setStep(1);
                setReport("");
                setCategory("");
                setLocation("");
              }}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 mt-4"
            >
              Submit Another Report
            </button>
          </div>
        );
        
      default:
        return null;
    }
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
            {renderStep()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhistleSafe;
