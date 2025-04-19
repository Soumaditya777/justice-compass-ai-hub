
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const LegalEase = () => {
  const { toast } = useToast();
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string; }[]>([
    { role: "assistant", content: "Hello! I'm LegalEase GPT. How can I help you with legal information today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock responses based on keywords in the question
  const getMockResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("fir") || lowerQuestion.includes("police")) {
      return "To file an FIR (First Information Report), visit your local police station. You have the right to get an FIR registered for any cognizable offense. If the police refuse, you can send a written complaint to the Superintendent of Police or approach a Magistrate under Section 156(3) of CrPC.";
    } else if (lowerQuestion.includes("rti") || lowerQuestion.includes("information")) {
      return "To file an RTI (Right to Information) application: 1) Write your application addressing the PIO of the concerned department. 2) Pay the fee (usually Rs 10). 3) You should receive information within 30 days. 4) If denied, you can appeal to the first appellate authority within 30 days.";
    } else if (lowerQuestion.includes("tenant") || lowerQuestion.includes("rent")) {
      return "As a tenant, you have rights regarding proper documentation (rent agreement), notice period before eviction, essential services, and privacy. Landlords cannot forcibly evict you without proper legal procedure or unreasonably withhold your security deposit.";
    } else if (lowerQuestion.includes("labor") || lowerQuestion.includes("worker") || lowerQuestion.includes("employee")) {
      return "As an employee, you have rights to minimum wage, maximum working hours (typically 8-9 hours per day), overtime pay, weekly rest day, safe working conditions, protection against harassment, and access to social security benefits where applicable under law.";
    } else {
      return "I don't have specific information on that legal topic. Would you like to know about filing an FIR, RTI applications, tenant rights, or labor laws?";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    // Add user question to chat
    const userMessage = { role: "user", content: question };
    setChatHistory(prev => [...prev, userMessage]);
    
    // Start loading
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Generate response
      const assistantResponse = { role: "assistant", content: getMockResponse(question) };
      setChatHistory(prev => [...prev, assistantResponse]);
      setIsLoading(false);
      setQuestion("");
    }, 1000);
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
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto mb-4 p-3 bg-gray-50 rounded-md">
                {chatHistory.map((message, index) => (
                  <div 
                    key={index} 
                    className={`mb-3 ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div 
                      className={`inline-block p-3 rounded-lg ${
                        message.role === "user" 
                          ? "bg-purple-600 text-white" 
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-left mb-3">
                    <div className="inline-block p-3 rounded-lg bg-gray-200">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask your legal question here..."
                  className="flex-1 p-2 border rounded-md"
                  rows={2}
                />
                <button
                  type="submit"
                  disabled={isLoading || !question.trim()}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-400 self-end"
                >
                  Send
                </button>
              </form>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>Try asking about: Filing an FIR, RTI applications, tenant rights, or labor laws</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalEase;
