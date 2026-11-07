import { ArrowUpRight, Check, Gauge, Layers, Shield, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const strengths = [
  { icon: Shield, title: "Reliability by design", copy: "We think about stability, quality, and the experience after launch—not just the initial release." },
  { icon: Layers, title: "Ready to evolve", copy: "Clear structure and maintainable foundations make it easier to adapt as your needs change." },
  { icon: Gauge, title: "Practical engineering", copy: "We choose modern tools and practices to solve real problems, without adding complexity for its own sake." },
  { icon: Sparkles, title: "A lasting partnership", copy: "We value transparent communication and continuous improvement throughout the software lifecycle." }
];

export default function WhyEverstack() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container why-layout">
        <div className="why-left">
          <SectionHeading eyebrow="THE EVERSTACK APPROACH" title={<>Good software is built for <span className="text-gradient">what comes next.</span></>} description="Technology decisions have a long tail. Our approach puts reliability, maintainability, and your evolving goals at the centre." />
          <a href="#contact" className="button button-primary">Build something lasting <ArrowUpRight size={17} /></a>
        </div>
        <div className="strength-list">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return <article className="strength-item" key={item.title}><div className="strength-number">0{index + 1}</div><div className="strength-icon"><Icon size={21} /></div><div><h3>{item.title}</h3><p>{item.copy}</p></div><Check className="strength-check" size={17} /></article>;
          })}
        </div>
      </div>
    </section>
  );
}
