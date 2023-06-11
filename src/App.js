import "./assets/css/App.scss";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Headline from "./components/Headline";
import EarthData from "./components/EarthData";
import Video from "./components/Video";
import Products from "./components/Products";
import Global from "./components/Global";
import Comment from "./components/Comment";
import Gallery from "./components/Gallery";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
      <Headline />
      <EarthData />
      <Video />
      <Products />
      <Global />
      <Comment/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default App;
