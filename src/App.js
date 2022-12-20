import React from "react";
import About from "./components/About/About";
import Content from "./components/Content/Content";
import Farm from "./components/Farm/Farm";
import Food from "./components/Food/Food";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Offer from "./components/Offer/Offer";
import Prodects from "./components/Products/Prodects";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Prodects/>
      <Work/>
      <Offer/>
      <Farm/>
      <Food/>
      <Content/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
