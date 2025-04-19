
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const LegalAid = () => {
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState<{question: string; answer: string}[]>([]);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const templates = [
    {
      id: 1,
      name: "Domestic Violence Complaint",
      description: "Template for filing a complaint regarding domestic violence",
      document: `
[Your Name]
[Your Address]
[City, State, PIN]
[Your Contact Number]
[Date]

The Station House Officer
[Police Station Name]
[Police Station Address]

Subject: Complaint regarding domestic violence

Respected Sir/Madam,

I, [Your Name], would like to report an incident of domestic violence that occurred on [Date] at [Time] at [Location]. The incident involves [Respondent's Name], who is my [Relationship with the Respondent].

[Detailed description of the incident]

I have suffered [mention physical/mental/emotional injuries if any] as a result of this incident. [Mention if medical attention was sought and where]

I am writing to request immediate intervention and protection under the Protection of Women from Domestic Violence Act, 2005. I am seeking [mention your expectations - protection order, residence order, etc.].

I have attached the following documents as evidence:
1. [Medical reports if any]
2. [Photographs if any]
3. [Any previous complaints filed]

I request that my complaint be registered, and appropriate action be taken at the earliest.

Yours sincerely,
[Your Signature]
[Your Name]
      `
    },
    {
      id: 2,
      name: "RTI Application",
      description: "Standard template for filing an RTI application",
      document: `
To,
The Public Information Officer
[Name of the Public Authority]
[Address]

Subject: Request for information under RTI Act, 2005

Sir/Madam,

I would like to seek the following information under the provisions of the Right to Information Act, 2005:

1. [Information requested in detail]
2. [Additional information points]

I am hereby enclosing an application fee of Rs.10/- through [Mode of Payment - IPO/DD/Banker's Cheque/Court Fee Stamp].

In case the requested information is held by another public authority, I request you to transfer the application to such public authority under Section 6(3) of the RTI Act and inform me about the same.

Yours faithfully,

[Name]
[Address]
[Phone Number]
[Date]
      `
    },
    {
      id: 3,
      name: "Workplace Harassment Complaint",
      description: "Template for reporting workplace harassment",
      document: `
[Your Name]
[Your Designation]
[Your Department]
[Your Contact Details]
[Date]

To,
The Internal Complaints Committee
[Company/Organization Name]
[Address]

Subject: Complaint of workplace harassment

Respected Members of the Committee,

I, [Your Name], working as [Your Designation] in the [Your Department] department, wish to lodge a formal complaint regarding workplace harassment that I have been experiencing.

The details of the incident(s) are as follows:
1. Date, time, and place of the incident(s): [Details]
2. Person(s) involved: [Name and designation]
3. Description of the incident(s): [Detailed account]
4. Names of witnesses, if any: [Names]
5. Any evidence available: [Documents/emails/messages]

This behavior has created an intimidating and hostile work environment for me, affecting both my professional performance and personal well-being.

I request the Committee to look into this matter urgently and take appropriate action as per the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 and the company policy.

I understand that the information provided by me will be kept confidential, and I will cooperate fully with the investigation.

Yours sincerely,
[Your Signature]
[Your Name]
      `
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Process the query and check if it's related to templates
    const lowerQuery = query.toLowerCase();
    if (
      lowerQuery.includes("template") || 
      lowerQuery.includes("form") || 
      lowerQuery.includes("document") ||
      lowerQuery.includes("letter")
    ) {
      setTimeout(() => {
        setResponses([...responses, { 
          question: query,
          answer: "I have several legal document templates that might help you. Would you like to see available templates?"
        }]);
        setShowTemplates(true);
        setIsLoading(false);
        setQuery("");
      }, 1000);
    } 
    // Handle other common legal questions with mock responses
    else if (lowerQuery.includes("domestic") || lowerQuery.includes("violence")) {
      setTimeout(() => {
        setResponses([...responses, { 
          question: query,
          answer: "If you're facing domestic violence, you have legal protections under the Protection of Women from Domestic Violence Act. You can file a complaint with the local police, approach a protection officer, or file an application directly in court. Would you like a template for filing a domestic violence complaint?"
        }]);
        setIsLoading(false);
        setQuery("");
      }, 1000);
    }
    else if (lowerQuery.includes("harassment") || lowerQuery.includes("workplace")) {
      setTimeout(() => {
        setResponses([...responses, { 
          question: query,
          answer: "Workplace harassment is illegal under various laws including the Sexual Harassment of Women at Workplace Act. You should report it to your organization's Internal Complaints Committee. Would you like a template for filing a workplace harassment complaint?"
        }]);
        setIsLoading(false);
        setQuery("");
      }, 1000);
    }
    else if (lowerQuery.includes("rti") || lowerQuery.includes("information")) {
      setTimeout(() => {
        setResponses([...responses, { 
          question: query,
          answer: "To file an RTI application, you need to send a written request to the Public Information Officer of the relevant government department along with a fee of Rs.10. Would you like a template for an RTI application?"
        }]);
        setIsLoading(false);
        setQuery("");
      }, 1000);
    }
    else {
      setTimeout(() => {
        setResponses([...responses, { 
          question: query,
          answer: "I can help with common legal issues like domestic violence, workplace harassment, and filing RTI applications. I can also provide document templates for these matters. Could you please clarify what specific legal assistance you need?"
        }]);
        setIsLoading(false);
        setQuery("");
      }, 1000);
    }
  };

  const downloadTemplate = (template: any) => {
    // Create a blob from the template content
    const blob = new Blob([template.document], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    toast({
      title: "Template Downloaded",
      description: `${template.name} has been downloaded as a text file.`,
    });
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
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto mb-4 p-3 bg-gray-50 rounded-md">
                {responses.length === 0 && (
                  <div className="text-center text-gray-500 py-8">
                    <p>Ask about domestic violence, workplace harassment, or RTI applications.</p>
                    <p className="mt-2">You can also request document templates for legal matters.</p>
                  </div>
                )}
                
                {responses.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-end mb-2">
                      <div className="bg-purple-600 text-white px-3 py-2 rounded-lg max-w-xs">
                        {item.question}
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-200 px-3 py-2 rounded-lg max-w-xs">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 px-3 py-2 rounded-lg">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {showTemplates && (
                <div className="mb-4 border rounded-md overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <h3 className="font-medium">Available Templates</h3>
                    <button 
                      onClick={() => setShowTemplates(false)}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Close
                    </button>
                  </div>
                  <div className="p-2 space-y-2">
                    {templates.map(template => (
                      <div key={template.id} className="border rounded p-3 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{template.name}</h4>
                            <p className="text-sm text-gray-600">{template.description}</p>
                          </div>
                          <button
                            onClick={() => downloadTemplate(template)}
                            className="bg-purple-600 text-white text-xs px-2 py-1 rounded hover:bg-purple-700"
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="What legal assistance do you need?"
                  className="flex-1 p-2 border rounded-md"
                  rows={2}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 disabled:bg-purple-400 self-end"
                >
                  Send
                </button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalAid;
