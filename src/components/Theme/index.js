import "./Theme.css";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import ThemePreview from "../ThemePreview";
import ThemeList from "../ThemeList";

export default function Theme({ name, colors, onDeleteClick }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <section>
      <button className="theme__toggle-button" onClick={toggleDetails}>
        <h2 className="theme__title">{name}</h2>
        {showDetails ? (
          <IconChevronUp size="3rem" />
        ) : (
          <IconChevronDown size="3rem" />
        )}
      </button>
      {showDetails ? (
        <div>
          <button type="button" className="delete-button">
            delete button
          </button>
          <ThemeList colors={colors} />
        </div>
      ) : (
        <ThemePreview colors={colors} />
      )}
    </section>
  );
}
