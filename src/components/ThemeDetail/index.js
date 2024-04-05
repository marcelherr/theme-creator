import "./ThemeDetail.css";

export default function ThemeDetail({ color }) {
  return (
    <article className="theme-detail">
      <div
        className="theme__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="theme__info">
        <span className="theme__role">{color.role}</span>
        <span className="theme__hex">{color.value}</span>
      </div>
    </article>
  );
}
