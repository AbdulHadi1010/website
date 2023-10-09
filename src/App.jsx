import { useState } from "react";
import Logo from "./assets/iCode.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img
          src={Logo}
          className="logo react"
          alt="React logo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}

export default App;
