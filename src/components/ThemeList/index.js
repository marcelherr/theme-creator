import ThemeDetail from "../ThemeDetail";
import "./ThemeList.css";

export default function ThemeList({ colors }) {
  return (
    <div>
      {/* <button type="button" className="theme-list__delete-button" onClick={handlDeleteButton}>
        Delete Theme
      </button> */}
      <ul className="color-list">
        {colors.map((color) => (
          <li key={color.role}>
            <ThemeDetail color={color} />
          </li>
        ))}
      </ul>
    </div>
  );
}
