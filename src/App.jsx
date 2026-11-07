import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyEverstack from "./sections/WhyEverstack";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <WhyEverstack />
      <Process />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>;
}
