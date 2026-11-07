export default function SectionHeading({ eyebrow, title, description, centered = false, light = false }) {
  return (
    <div className={`section-heading ${centered ? "text-center" : ""} ${light ? "section-heading-light" : ""}`}>
      {eyebrow && <div className="eyebrow"><span />{eyebrow}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
