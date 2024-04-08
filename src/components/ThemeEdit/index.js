import "./ThemeEdit.css";

const initialTheme = {
  name: "",
  colors: [
    { role: "primary test", value: "#d896ff" },
    { role: "secondary", value: "#009999" },
    { role: "surface", value: "#da0b94" },
    { role: "surface-on", value: "#b7eced" },
  ],
};

export default function EditThemeForm({ onSaveClick }) {
  const initialData = initialTheme;

  function handleSaveTheme(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const editedTheme = {
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };

    onSaveClick(editedTheme);
  }

  return (
    <form className="theme-form" onSaveClick={handleSaveTheme}>
      <h2 className="form-title">Edit Theme</h2>
      <input
        className="name-input"
        type="text"
        placeholder="Theme Name"
        name="name"
        defaultValue={initialData.name}
        required
      />
      <fieldset>
        {initialData.colors.map((color) => (
          <input
            key={color.role}
            className="color-input-box"
            type="color"
            name={color.role}
            aria-label={color.role}
            defaultValue={color.value}
          />
        ))}
      </fieldset>
      <button className="save-button" type="submit">
        Save Theme
      </button>
    </form>
  );
}
