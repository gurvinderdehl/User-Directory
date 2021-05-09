import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";



function App() {
  return (
    <Router >
      <div>
        <Navbar />
        <Wrapper>
          <Header />
          <Main />

        </Wrapper>
        <Footer />
      </div>
    </Router>

  )
}

export default App;