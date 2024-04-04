import "./ThemeList.css";

export default function ThemeCard({ color }) {
  return (
    <article className="theme__list">
      <div
        className="list__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="list__info">
        <span className="list__role">{color.role}</span>
        <span className="list__hex">{color.value}</span>
      </div>
    </article>
  );
}
