import "./assets/css/App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Headline from "./components/Headline";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
      <Headline/>
    </>
  );
}

export default App;
