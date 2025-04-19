
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const LegalEase = () => {
  const { toast } = useToast();
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, show a toast until we integrate with a real API
    toast({
      title: "Question Received",
      description: "We'll implement the AI response functionality soon.",
    });
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>LegalEase GPT</CardTitle>
            <CardDescription>
              Get simple explanations for legal procedures and rights in your preferred language
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your legal question here..."
                className="w-full h-32 p-2 border rounded-md"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Get Answer
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalEase;
