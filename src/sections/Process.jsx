import SectionHeading from "../components/SectionHeading";
import { processSteps } from "../data/site";
import * as Icons from "lucide-react";

export default function Process() {
  return (
    <section className="section process-section" id="approach">
      <div className="container">
        <SectionHeading eyebrow="HOW WE WORK" title={<>A clear path from <span className="text-gradient">idea to impact.</span></>} description="A collaborative process keeps decisions visible, priorities clear, and progress moving in the right direction." centered />
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = Icons[step.icon] || Icons.Circle;
            return <article className="process-step" key={step.number}>
              <div className="process-top"><span>{step.number}</span><div className="process-icon"><Icon size={21} /></div></div>
              <h3>{step.title}</h3><p>{step.description}</p>
              {index !== processSteps.length - 1 && <div className="process-connector" aria-hidden="true"><span /></div>}
            </article>;
          })}
        </div>
        <div className="process-note"><span className="note-dot" /> Collaboration and clear communication at every step.</div>
      </div>
    </section>
  );
}
