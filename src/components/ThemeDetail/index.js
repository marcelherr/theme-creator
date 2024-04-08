import "./ThemeDetail.css";
import React, { useEffect, useState } from "react";

export default function ThemeDetail({ color }) {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    async function fetchColorName() {
      const colorValue = color.value.replace("#", "");

      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${colorValue}`
        );
        const data = await response.json();

        setColorName(data.name.value);
      } catch (error) {
        console.error("Farbname ist nicht abrufbar.", error);
      }
    }
    fetchColorName();
  }, [color.value]);

  return (
    <article className="theme-detail">
      <div
        className="theme-display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="theme-info">
        <span className="theme-role">{color.role}</span>
        <span className="hex-name">{colorName}</span>
        <span className="theme-hex">{color.value}</span>
      </div>
    </article>
  );
}
