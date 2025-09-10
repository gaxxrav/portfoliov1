import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import RetroCursor from '@/components/RetroCursor'
import './App.css'

// Import fonts directly in your CSS instead
// Remove the Next.js font imports and configuration
// These will be handled in index.html and App.css

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="font-sans min-h-screen bg-retro-black text-white">
            <RetroCursor />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={
                  <>
                    <Header />
                    <main>
                      <Hero />
                      <About />
                      <Skills />
                      <Projects />
                      <Contact />
                    </main>
                    <Footer />
                  </>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;
