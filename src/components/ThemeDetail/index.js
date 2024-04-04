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

// import ColorCard from "./ColorCard";
// import "./ColorList.css";

// export default function ColorList({ colors }) {
//   return (
//     <ul className="color-list">
//       {colors.map((color) => (
//         <li key={color.role}>
//           <ColorCard color={color} />
//         </li>
//       ))}
//     </ul>
//   );
// }
