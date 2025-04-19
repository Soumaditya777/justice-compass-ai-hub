
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import LegalEase from "./pages/LegalEase";
import WhistleSafe from "./pages/WhistleSafe";
import GovWatch from "./pages/GovWatch";
import JusticeMap from "./pages/JusticeMap";
import LegalAid from "./pages/LegalAid";
import Connect from "./pages/Connect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/legal-ease" element={<LegalEase />} />
          <Route path="/whistle-safe" element={<WhistleSafe />} />
          <Route path="/gov-watch" element={<GovWatch />} />
          <Route path="/justice-map" element={<JusticeMap />} />
          <Route path="/legal-aid" element={<LegalAid />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
