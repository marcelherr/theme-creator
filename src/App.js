import "./App.css";
import ThemeList from "./components/ThemeList/index";
import { themes } from "./db";
import Header from "./components/Header/index";

function App() {
  return (
    <div>
      <Header />
      <main className="main__container">
        {themes.map((theme) => (
          <div key={theme.name}>
            <h2 className="theme__title">{theme.name}</h2>
            <ul className="color__list">
              {theme.colors.map((color) => (
                <li key={color.role}>
                  <ThemeList color={color} />
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
