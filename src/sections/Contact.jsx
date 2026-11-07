import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <SectionHeading eyebrow="LET'S BUILD WHAT'S NEXT" title={<>Have a challenge in mind? <span className="contact-gradient">Let's talk.</span></>} description="Tell us a little about what you're looking to build, improve, or solve. We'll take it from there." light />
            <div className="contact-details">
              <div className="contact-detail-icon"><Mail size={19} /></div><div><span>EMAIL</span><p>{siteConfig.email || "Business email to be announced"}</p></div>
              <div className="contact-detail-icon"><MapPin size={19} /></div><div><span>LOCATION</span><p>{siteConfig.location} <small>· Working with local and international clients</small></p></div>
            </div>
            <div className="contact-decoration"><div /><div /><div /></div>
          </div>
          <div className="contact-form-wrap">
            {submitted ? <div className="form-success"><CheckCircle2 size={42} /><h3>Thank you for reaching out.</h3><p>Your message has been submitted. We'll be in touch as soon as possible.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another message <ArrowUpRight size={16} /></button></div> :
              <form name="everstack-contact" method="POST" action="/thank-you/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={() => setSubmitted(true)}>
                <input type="hidden" name="form-name" value="everstack-contact" />
                <p className="hidden-field"><label>Don't fill this out: <input name="bot-field" /></label></p>
                <div className="form-heading"><MessageSquare size={18} /><span>PROJECT ENQUIRY</span></div>
                <div className="form-row">
                  <label>Your name <input type="text" name="name" placeholder="Jane Smith" autoComplete="name" required /></label>
                  <label>Email address <input type="email" name="email" placeholder="jane@company.com" autoComplete="email" required /></label>
                </div>
                <label>Company <span className="optional">(optional)</span><input type="text" name="company" placeholder="Your organization" autoComplete="organization" /></label>
                <label>Subject <input type="text" name="subject" placeholder="What would you like to discuss?" required /></label>
                <label>Tell us about your project <textarea name="message" rows="4" placeholder="A few details about your goals, requirements, or challenges..." required /></label>
                <button className="button button-primary form-submit" type="submit">Send enquiry <Send size={16} /></button>
                <p className="form-privacy">Your information will only be used to respond to your enquiry.</p>
              </form>}
          </div>
        </div>
      </div>
    </section>
  );
}
