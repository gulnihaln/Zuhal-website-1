import Home from "./components/Home";
import "./App.css";
import { IconContext } from "react-icons/lib";
function App() {
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <Home />
    </IconContext.Provider>
  );
}

export default App;
