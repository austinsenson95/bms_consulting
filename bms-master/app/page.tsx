// Navbar moved to global layout
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Architecture from "@/components/sections/Architecture";
import Process from "@/components/sections/Process";
import UseCases from "@/components/sections/UseCases";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
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
