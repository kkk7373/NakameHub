import Header from "./components/Header.jsx";
import Home from "./Home.jsx";
import Footer from "./components/Footer.jsx";
import Event from "./Event.jsx";
import Login from "./Login.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
