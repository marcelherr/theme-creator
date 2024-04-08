import "./ThemeForm.css";

const initialTheme = {
  name: "",
  colors: [
    { role: "primary", value: "#d896ff" },
    { role: "secondary", value: "#009999" },
    { role: "surface", value: "#da0b94" },
    { role: "surface-on", value: "#b7eced" },
  ],
};

export default function ThemeForm({ onSubmit }) {
  const initialData = initialTheme;

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newTheme = {
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

    onSubmit(newTheme);
  }

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Add new Theme</h2>
      <input
        aria-label="theme title"
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
      <button className="submit-button" type="submit">
        Add Theme
      </button>
    </form>
  );
}
