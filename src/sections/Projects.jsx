import { ArrowUpRight, Code2, ExternalLink, Layers3 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/site";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading"><SectionHeading eyebrow="SELECTED WORK" title={<>Ideas shaped into <span className="text-gradient">working solutions.</span></>} description="A glimpse of the kinds of challenges and technical directions we explore. These initial entries are concept and demonstration projects—not commercial client engagements." /></div>
        <div className="projects-grid">
          {projects.map((project, index) => <article className={`project-card project-card-${index + 1}`} key={project.title}>
            <div className="project-art">
              <div className="project-art-grid" />
              <div className="project-window">
                <div className="window-bar"><i /><i /><i /><span>{project.category}</span></div>
                <div className="window-content">
                  {index === 0 ? <><div className="window-sidebar"><b /><b /><b /><b /></div><div className="window-main"><div className="window-heading" /><div className="window-metrics"><i /><i /><i /></div><div className="window-chart"><span /><span /><span /><span /><span /><span /><span /></div></div></> : index === 1 ? <><div className="terminal-line"><span>$</span> docker build -t app .</div><div className="terminal-line"><span>✓</span> image built successfully</div><div className="terminal-line"><span>$</span> pipeline deploy production</div><div className="terminal-status">DEPLOYMENT READY</div></> : <><div className="file-icon"><Code2 size={27} /></div><div className="file-lines"><i /><i /><i /></div><div className="file-progress"><span /></div></>}
                </div>
              </div>
              <div className="project-art-label"><Layers3 size={14} /> EVERSTACK / LAB</div>
            </div>
            <div className="project-info"><div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}
        </div>
        <div className="projects-footnote"><span className="footnote-mark">i</span> Portfolio examples are illustrative. Actual project details will be published as work becomes available.</div>
      </div>
    </section>
  );
}
