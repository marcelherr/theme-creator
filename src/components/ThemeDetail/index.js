import "./ThemeDetail.css";

export default function ThemeDetail({ color }) {
  return (
    <article className="theme-detail">
      <div
        className="theme-display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="theme-info">
        <span className="theme-role">{color.role}</span>
        <span className="hex-name">color name placeholder</span>
        <span className="theme-hex">{color.value}</span>
      </div>
    </article>
  );
}
