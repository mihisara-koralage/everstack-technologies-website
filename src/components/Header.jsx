import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navigation } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={close}>{item.label}</a>)}
          <a className="nav-mobile-cta" href="#contact" onClick={close}>Start a project <ArrowUpRight size={16} /></a>
        </nav>
        <a className="button button-small header-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
