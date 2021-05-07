import React from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";


function App(){
 return (
   <div>
     <Navbar />
     <Wrapper>
      <Header />
      <Main/>
  
     </Wrapper>
     <Footer />
   </div>

 )
}

export default App;