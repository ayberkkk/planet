import "./assets/css/App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
