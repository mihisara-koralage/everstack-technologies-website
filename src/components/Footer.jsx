import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { navigation, services, siteConfig } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo light />
            <p>Engineering reliable digital solutions for a world that never stands still.</p>
            <div className="footer-tagline">{siteConfig.tagline}</div>
          </div>
          <div className="footer-column"><h3>Explore</h3>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#contact">Contact</a></div>
          <div className="footer-column"><h3>Services</h3>{services.slice(0, 5).map((item) => <a key={item.number} href="#services">{item.title}</a>)}</div>
          <div className="footer-column footer-contact"><h3>Get in touch</h3>
            <span><MapPin size={15} />{siteConfig.location}</span>
            {siteConfig.email ? <a href={`mailto:${siteConfig.email}`}><Mail size={15} />{siteConfig.email}</a> : <span><Mail size={15} />Business email coming soon</span>}
            <div className="social-links">
              {siteConfig.linkedin && <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>}
              {siteConfig.github && <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>}
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {year} Everstack Technologies. All rights reserved.</span><span>Building with purpose. Engineering for tomorrow. <ArrowUpRight size={14} /></span></div>
      </div>
    </footer>
  );
}
