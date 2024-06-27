import react, { useState } from "react";
import Header from "./components/header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-lime-700 p-8">
        <Header />
        <Inputs />
        <Results />
      </div>
    </div>
  );
}

export default App;
