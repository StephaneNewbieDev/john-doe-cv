import React from 'react';
import styles from './Services.module.css';
import servicesBg from '../images/services-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faMobileAlt, faRocket } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <section className={`container ${styles.services}`} style={{ backgroundImage: `url(${servicesBg})` }}>
      {/*
        - Section "Services" avec une classe CSS module et une classe Bootstrap "container".
        - Utilise un style en ligne pour définir l'image de fond.
      */}
      <div className={styles.overlay}></div>
      {/*
        - Overlay pour améliorer la lisibilité du texte sur l'image de fond.
      */}
      <div className={styles.content}>
        {/*
          - Contenu principal de la section.
        */}
        <h2>Mes Services</h2>
        {/*
          - Titre de la section.
        */}
        <div className="row">
          {/*
            - Une ligne pour organiser les cartes de service.
          */}
          <div className="col-md-6 col-lg-3 mb-4">
            {/*
              - Colonne pour chaque carte (prend la moitié de la largeur sur les écrans moyens, le quart sur les grands).
              - mb-4: Marge en bas de 4 unités (Bootstrap).
            */}
            <div className={`card h-100 ${styles.serviceCard}`}>
              {/*
                - Carte Bootstrap avec une hauteur de 100% et une classe CSS module.
              */}
              <div className="card-body text-center">
                {/*
                  - Corps de la carte, centré.
                */}
                <FontAwesomeIcon icon={faCode} size="2x" className={styles.serviceIcon} />
                {/*
                  - Icône Font Awesome pour le développement web.
                  - size="2x": Taille de l'icône.
                  - className={styles.serviceIcon}: Classe CSS module pour le style de l'icône.
                */}
                <h5 className="card-title">Développement Web</h5>
                {/*
                  - Titre de la carte.
                */}
                <p className="card-text">
                  Création de sites web sur mesure, adaptés à vos besoins et à votre image de marque.
                </p>
                {/*
                  - Texte de la carte.
                */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className={`card h-100 ${styles.serviceCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faPalette} size="2x" className={styles.serviceIcon} />
                <h5 className="card-title">Design Web</h5>
                <p className="card-text">
                  Conception d'interfaces utilisateur attrayantes et intuitives, centrées sur l'expérience utilisateur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className={`card h-100 ${styles.serviceCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faMobileAlt} size="2x" className={styles.serviceIcon} />
                <h5 className="card-title">Responsive Design</h5>
                <p className="card-text">
                  Sites web optimisés pour tous les appareils, des ordinateurs de bureau aux smartphones.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className={`card h-100 ${styles.serviceCard}`}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faRocket} size="2x" className={styles.serviceIcon} />
                <h5 className="card-title">Optimisation SEO</h5>
                <p className="card-text">
                  Amélioration de la visibilité de votre site web sur les moteurs de recherche.
                </p>
              </div>
            </div>
          </div>
          {/*
            - Vous pouvez ajouter d'autres services ici.
          */}
        </div>
      </div>
    </section>
  );
}

export default Services;