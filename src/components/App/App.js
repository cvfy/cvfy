import React from "react";
import "./App.css";
import CoverLetterNav from "../CoverLetterNav/CoverLetterNav";
import CoverLetterMain from "../CoverLetterMain/CoverLetterMain";
import ThemeContextProvider from "../../contexts/CoverLetterContext";

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <div className="App">
          <CoverLetterNav></CoverLetterNav>
          <CoverLetterMain></CoverLetterMain>
        </div>
      </ThemeContextProvider>
    );
  }
}

export default App;
