import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={`navbar navbar-expand-md navbar-dark bg-dark ${styles.header}`}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">John Doe</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact activeClassName={styles.active}>Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/a-propos" activeClassName={styles.active}>À Propos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" activeClassName={styles.active}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/realisations" activeClassName={styles.active}>Réalisations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" activeClassName={styles.active}>Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName={styles.active}>Contact</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/mentions-legales" activeClassName={styles.active}>Mentions Légales</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;