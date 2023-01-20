import React from 'react';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='Navbar-container'>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">Shiro Company</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav Navbar-center">
                        <a className="nav-link active"href="#">Home</a>
                        <a className="nav-link" href="#">¿Por qué Shiro?</a>
                        <a className="nav-link" href="#">Portafolio</a>
                        <a className="nav-link" href="#">Artistas</a>
                        <a className="nav-link" href="#">Blog</a>
                    </div>
                    <div className="navbar-nav ms-5">
                        <a className="nav-link" href="#">Registrarse</a>
                        <a className="nav-link" href="#">Iniciar Sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar