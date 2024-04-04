import "./ThemeDetail.css";

export default function ThemeDetail({ color }) {
  return (
    <article className="theme__detail">
      <div
        className="detail__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="detail__info">
        <span className="detail__role">{color.role}</span>
        <span className="detail__hex">{color.value}</span>
      </div>
    </article>
  );
}
