import "./App.css";
import { themes as initialThemes } from "./db";
import Header from "./components/Header/index";
import Theme from "./components/Theme";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import ThemeForm from "./components/ThemeForm";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  function handleAddTheme(newTheme) {
    const newThemeWithId = { ...newTheme, id: uuid() };
    setThemes([newThemeWithId, ...themes]);

    // function handleDeleteTheme(id) {
    //   const modifiedState = themes.filter((item) => item.id !== id);
    //   setThemes(modifiedState);
    // }
  }

  return (
    <>
      <Header />
      <main className="main-container">
        <ThemeForm onSubmit={handleAddTheme} />
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme name={theme.name} colors={theme.colors} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
