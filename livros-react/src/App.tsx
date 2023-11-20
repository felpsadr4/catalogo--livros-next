import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Catalogo from './components/dados/Catálogo';
import Novo from './components/dados/Novo';
import Menu from './components/dados/Menu';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-light" to="/menu">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/catalogo">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/novo">Novo Livro</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/novo" element={<Novo />} />
      </Routes>
    </Router>
  );
}

export default App;
