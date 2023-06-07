import "./assets/css/App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Headline from "./components/Headline";
import EarthData from "./components/EarthData";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
      <Headline/>
      <EarthData/>
      <Video/>
    </>
  );
}

export default App;
