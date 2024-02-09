import NavBar from "./router/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AcercaDe from "./components/AcercaDe";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import NoPage from "./components/NoPage";
import "./styles/home.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/acerca-de" element={<AcercaDe />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
