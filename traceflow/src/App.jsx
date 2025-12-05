import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import PipelineDemo from './components/PipelineDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />

      <main>
        <Hero />

        <ServicesGrid />

        <section id="pipeline" className="py-24 bg-secondary/20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pipeline Visualization</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience how TraceFlow orchestrates the entire lifecycle from Simulink models to HIL testing.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-primary/10">
              <PipelineDemo />
            </div>
          </div>
        </section>

        <section id="integration" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-background border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:32px_32px]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Accelerate Your Workflow?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join leading automotive OEMs who have reduced their integration time by 50% with TraceFlow.
                </p>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
