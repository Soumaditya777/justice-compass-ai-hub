
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const LegalAid = () => {
  const { toast } = useToast();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Query Received",
      description: "Our chatbot will assist you shortly.",
    });
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Legal Aid Chatbot</CardTitle>
            <CardDescription>
              Get instant answers to common legal questions and access document templates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What legal assistance do you need?"
                className="w-full h-32 p-2 border rounded-md"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Get Help
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalAid;
