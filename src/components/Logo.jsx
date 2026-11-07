import { Layers3 } from "lucide-react";
import { siteConfig } from "../data/site";

export default function Logo({ compact = false, light = false }) {
  return (
    <a href="#home" className={`brand ${light ? "brand-light" : ""}`} aria-label={`${siteConfig.name} home`}>
      <img
        src={compact ? siteConfig.emblem : siteConfig.fullLogo}
        alt={compact ? "Everstack emblem" : "Everstack Technologies"}
        className={compact ? "brand-emblem" : "brand-full"}
        onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling.style.display = "flex"; }}
      />
      <span className="brand-fallback" aria-hidden="true">
        <span className="brand-mark"><Layers3 size={compact ? 22 : 23} strokeWidth={2.1} /></span>
        {!compact && <span className="brand-wordmark"><strong>everstack</strong><small>TECHNOLOGIES</small></span>}
      </span>
    </a>
  );
}
