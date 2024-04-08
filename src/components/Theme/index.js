import "./Theme.css";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import ThemePreview from "../ThemePreview";
import ThemeList from "../ThemeList";
import EditThemeForm from "../ThemeEdit";

export default function Theme({ name, colors, onDeleteClick, onEditClick }) {
  const [showDetails, setShowDetails] = useState(false);
  const [editTheme, setEditTheme] = useState(false);

  function toggleDetails() {
    setShowDetails(!showDetails);
  }
  function handleEditClick() {
    setEditTheme(true);
    onEditClick();
    setShowDetails(true);
  }

  return (
    <div>
      <section>
        <button className="toggle-button" onClick={toggleDetails}>
          <h2 className="theme-title">{name}</h2>
          {showDetails ? (
            <IconChevronUp size="2rem" />
          ) : (
            <IconChevronDown size="2rem" />
          )}
        </button>
        {showDetails ? (
          <div>
            {editTheme ? (
              <EditThemeForm name={name} colors={colors} />
            ) : (
              <div>
                <button
                  type="button"
                  className="delete-button"
                  onClick={onDeleteClick}
                >
                  Delete Theme
                </button>
                <button className="edit-button" onClick={handleEditClick}>
                  Edit Theme
                </button>
                <ThemeList colors={colors} />
              </div>
            )}
          </div>
        ) : editTheme ? (
          <EditThemeForm name={name} colors={colors} />
        ) : (
          <ThemePreview colors={colors} />
        )}
      </section>
    </div>
  );
}
