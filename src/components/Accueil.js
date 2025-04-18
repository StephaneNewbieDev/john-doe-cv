import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Accueil.module.css';
import heroBgMobile from '../images/hero-bg-mobile.jpg';
import heroBgTablet from '../images/hero-bg-tablette.jpg';
import heroBg from '../images/hero-bg.jpg';

function Accueil() {
  return (
    <section className={styles.accueil}>
      {/*
        - La section principale de la page d'accueil.
        - Utilise les styles de Accueil.module.css pour la mise en page.
      */}
      <div className={styles.overlay}></div>
      {/*
        - Un div semi-transparent qui se superpose à l'image de fond pour améliorer la lisibilité du texte.
      */}
      <div className={styles.content}>
        {/*
          - Le contenu principal de la page d'accueil (titre, sous-titre, bouton).
        */}
        <h1>Bonjour, je suis John Doe</h1>
        {/*
          - Le titre principal de la page.
        */}
        <h2>Développeur Web</h2>
        {/*
          - Le sous-titre de la page.
        */}
        <Link to="/a-propos" className="btn btn-primary">En savoir plus</Link>
        {/*
          - Un bouton qui redirige vers la page "À Propos".
          - Utilise les classes de Bootstrap pour le style du bouton.
        */}
      </div>
    </section>
  );
}

export default Accueil;