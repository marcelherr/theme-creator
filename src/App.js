import "./App.css";
import ThemeDetail from "./components/ThemeDetail/index";
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
                  <ThemeDetail color={color} />
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
