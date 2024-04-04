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

// import "./App.css";

// import Theme from "./components/Theme";

// function App() {
//   return (
//     <>
//       <header className="header">
//         <h1>Theme Creator</h1>
//       </header>
//       <main className="main-container">
//         <ul className="theme-list">
//           {themes.map((theme) => (
//             <li key={theme.id}>
//               <Theme name={theme.name} colors={theme.colors} />
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   );
// }

// export default App;
