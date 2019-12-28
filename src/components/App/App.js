import React from "react";
import "./App.css";
import TemplateNav from "../TemplateNav/TemplateNav";
import TemplateMain from "../TemplateMain/TemplateMain";

function App() {
  return (
    <div className="App">
      <TemplateNav></TemplateNav>
      <TemplateMain></TemplateMain>
    </div>
  );
}

export default App;
