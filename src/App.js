import "./assets/css/App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import MobileHeader from "./components/layouts/MobilHeader";

function App() {
  return (
    <>
      <Router>
        <Header />
        <MobileHeader />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
