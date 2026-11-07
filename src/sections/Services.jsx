import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/site";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-heading-row">
          <SectionHeading eyebrow="WHAT WE DO" title={<>Engineering the tools <span className="text-gradient">behind your next move.</span></>} description="From the first line of code to the infrastructure that keeps it running, we help turn complex requirements into dependable digital products." />
          <a href="#contact" className="button button-outline services-cta">Discuss your needs <ArrowUpRight size={17} /></a>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = Icons[service.icon] || Icons.Code2;
            return <article className="service-card" key={service.number}>
              <div className="service-card-top"><span>{service.number}</span><div className="service-icon"><Icon size={21} strokeWidth={1.8} /></div></div>
              <h3>{service.title}</h3><p>{service.description}</p>
              <ul>{service.points.map((point) => <li key={point}><span />{point}</li>)}</ul>
              <a href="#contact" aria-label={`Discuss ${service.title}`} className="service-arrow"><ArrowUpRight size={18} /></a>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
