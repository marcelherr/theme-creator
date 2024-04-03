import "./App.css";
import ThemeCard from "./components/ThemeCard/index";
import { themes } from "./db";
import Header from "./components/Header/index";

function App() {
  return (
    <div>
      <Header className="header" />
      <main className="main__container">
        {themes.map((theme) => (
          <div key={theme.name}>
            <h2 className="theme__title">{theme.name}</h2>
            <ul className="color__list">
              {theme.colors.map((color) => (
                <li key={color.role}>
                  <ThemeCard color={color} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
