import { GlobalStyle } from "./Global/GlobalStyle";
import { Navbar } from "./Home/Navbar/Navbar";

export function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
    </div>
  );
}
