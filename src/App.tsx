import { Navbar } from "./Home/Navbar/Navbar";
import "../src/styles/global.scss"
import { MobileNav } from "./Home/Navbar/MobileBar";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <MobileNav />
    </div>
  );
}
