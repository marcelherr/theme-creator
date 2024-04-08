import "./Theme.css";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import ThemePreview from "../ThemePreview";
import ThemeList from "../ThemeList";

export default function Theme({ name, colors, onDeleteClick, onEditClick }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <section>
      <button className="toggle-button" onClick={toggleDetails}>
        <h2 className="theme-title">{name}</h2>
        {showDetails ? (
          <IconChevronUp size="3rem" />
        ) : (
          <IconChevronDown size="3rem" />
        )}
      </button>
      {showDetails ? (
        <div>
          <button
            type="button"
            className="delete-button"
            onClick={onDeleteClick}
          >
            Delete Theme
          </button>
          <button className="edit-button" onClick={onEditClick}>
            Edit Theme
          </button>
          <ThemeList colors={colors} />
        </div>
      ) : (
        <ThemePreview colors={colors} />
      )}
    </section>
  );
}
