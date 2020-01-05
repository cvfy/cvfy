import React from "react";
import "./App.css";
import TemplateNav from "../TemplateNav/TemplateNav";
import TemplateMain from "../TemplateMain/TemplateMain";
import ThemeContextProvider from "../../contexts/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <div className="App">
          <TemplateNav></TemplateNav>
          <TemplateMain></TemplateMain>
        </div>
      </ThemeContextProvider>
    );
  }
}

export default App;
