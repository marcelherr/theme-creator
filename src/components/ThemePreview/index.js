import "./ThemePreview.css";

export default function ThemePreview({ colors }) {
  return (
    <ul className="theme-preview">
      {colors.map((color) => (
        <li key={color.role}>
          <div
            className="preview-color"
            style={{ backgroundColor: color.value }}
          ></div>
        </li>
      ))}
    </ul>
  );
}
