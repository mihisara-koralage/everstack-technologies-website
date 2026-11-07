import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { principles } from "../data/site";
import * as Icons from "lucide-react";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-intro">
            <SectionHeading eyebrow="WHO WE ARE" title={<>Technology is only powerful when it <span className="text-gradient">moves you forward.</span></>} />
            <p>At Everstack Technologies, we believe great software goes beyond development. We focus on engineering reliable digital solutions, maintaining them with care, and helping businesses evolve through technology.</p>
            <a className="text-link" href="#approach">Discover how we work <ArrowUpRight size={17} /></a>
          </div>
          <div className="about-side">
            <div className="about-index">01 <span>/ OUR FOUNDATION</span></div>
            <p>We bring a considered engineering mindset to every challenge—from the first conversation to the ongoing work that keeps a solution useful.</p>
            <div className="about-line" />
            <div className="about-location"><span className="location-pulse" /> Independent technology company <span className="location-separator">·</span> Sri Lanka</div>
          </div>
        </div>
        <div className="principles-grid">
          {principles.map((item, index) => {
            const Icon = Icons[item.icon] || Icons.Circle;
            return <article className="principle-card" key={item.title}><div className="principle-top"><span>0{index + 1}</span><Icon size={22} /></div><h3>{item.title}</h3><p>{item.description}</p></article>;
          })}
        </div>
      </div>
    </section>
  );
}
