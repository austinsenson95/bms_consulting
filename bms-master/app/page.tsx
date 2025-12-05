import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Architecture from "@/components/Architecture";
import Process from "@/components/Process";
import UseCases from "@/components/UseCases";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-950 text-slate-200 selection:bg-brand-accent selection:text-brand-950">
            <Navbar />
            <Hero />
            <Services />
            <Architecture />
            <Process />
            <UseCases />
            <TechStack />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}
