import "./ThemeCard.css";

export default function ThemeCard({ color }) {
  return (
    <article className="theme__card">
      <div
        className="theme-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="theme-card__info">
        <span className="theme-card__role">{color.role}</span>
        <span className="theme-card__hex">{color.value}</span>
      </div>
    </article>
  );
}
