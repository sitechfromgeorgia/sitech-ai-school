import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <Hero />
      <ChatButton />
      <Courses />
      <Features />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
