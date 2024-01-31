import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Phrases from "./components/Phrases";

function App() {
  return (
    <div className="App">
      <Phrases />
      <Analytics />
    </div>
  );
}

export default App;
