import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Cloud, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "../data/site";

function SystemVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract illustration of connected software systems">
      <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
      <div className="visual-glow" />
      <div className="visual-core"><Layers3 size={39} strokeWidth={1.5} /><span>EVERSTACK</span><small>ENGINEERED TO EVOLVE</small></div>
      <div className="visual-node node-code"><Code2 size={19} /><span>Software</span></div>
      <div className="visual-node node-cloud"><Cloud size={19} /><span>Cloud</span></div>
      <div className="visual-node node-secure"><ShieldCheck size={19} /><span>Reliable</span></div>
      <div className="visual-node node-stack"><Sparkles size={18} /><span>Built to last</span></div>
      <div className="visual-caption"><span className="status-dot" /> Thoughtful engineering. Lasting impact.</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-line" /> INDEPENDENT SOFTWARE ENGINEERING</div>
          <h1>Building digital solutions that <span>stand the test of time.</span></h1>
          <p className="hero-description">We design, develop, deploy, and maintain reliable software solutions that help businesses move forward with confidence.</p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">Start a project <ArrowUpRight size={18} /></a>
            <a href="#services" className="button button-ghost">Explore our services <ArrowRight size={17} /></a>
          </div>
          <div className="hero-proof"><div className="proof-icon"><Check size={15} /></div><span>Built around quality, clarity, and long-term value</span></div>
        </div>
        <SystemVisual />
      </div>
      <div className="container hero-bottom"><span>{siteConfig.tagline}</span><a href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /></a></div>
    </section>
  );
}
