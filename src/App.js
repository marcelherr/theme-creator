import "./App.css";
import { themes as initialTheme } from "./db";
import Header from "./components/Header/index";
import Theme from "./components/Theme";
import { v4 as uuid } from "uuid";
import ThemeForm from "./components/ThemeForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialTheme,
  });

  function handleAddTheme(newTheme) {
    const newThemeWithId = { ...newTheme, id: uuid() };
    setThemes([newThemeWithId, ...themes]);
  }
  function handleDeleteTheme(id) {
    const themeState = themes.filter((item) => item.id !== id);
    setThemes(themeState);
  }

  // function handleEditTheme() {
  //   console.log("edit button clicked");
  // }
  // function handleSaveTheme() {
  //   console.log("Save button clicked");
  // }
  return (
    <>
      <Header />
      <main className="main-container">
        <ThemeForm onSubmit={handleAddTheme} />
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme
                name={theme.name}
                colors={theme.colors}
                onDeleteClick={() => handleDeleteTheme(theme.id)}
                // onEditClick={() => handleEditTheme()}
                // onSaveClick={() => handleSaveTheme()}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
