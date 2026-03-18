import Navbar   from "@/components/layout/Navbar";
import Hero     from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact  from "@/components/sections/Contact";
import Footer   from "@/components/layout/Footer";
import Marquee  from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee
          items={[
            "UI/UX Design",
            "Web Development",
            "Brand Identity",
            "Motion Design",
            "Digital Strategy",
            "Analytics & SEO",
          ]}
        />
        <Projects />
        <Marquee
          items={["Strategy", "Design", "Development", "Branding", "Motion", "Analytics"]}
          reverse
        />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
