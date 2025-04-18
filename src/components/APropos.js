import React from 'react';
import styles from './APropos.module.css';
import johnDoeAbout from '../images/john-doe-about.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le CSS de Bootstrap

function APropos() {
  return (
    <section className={`container ${styles.aPropos}`}>
      {/*
        - Section "À Propos" avec une classe CSS module et une classe Bootstrap "container" pour la mise en page.
      */}
      <div className="row">
        {/*
          - Une ligne pour organiser le contenu en colonnes.
        */}
        <div className="col-md-6">
          {/*
            - Colonne pour l'image (prend la moitié de la largeur sur les écrans moyens et grands).
          */}
          <img src={johnDoeAbout} alt="John Doe" className={styles.aboutImage} />
          {/*
            - Image de John Doe avec une classe CSS module pour le style.
          */}
        </div>
        <div className="col-md-6">
          {/*
            - Colonne pour le texte (prend l'autre moitié de la largeur sur les écrans moyens et grands).
          */}
          <h2>À Propos de Moi</h2>
          {/*
            - Titre de la section.
          */}
          <p>
            Je suis un développeur web passionné avec une solide expérience dans la création de sites web
            modernes et performants. J'ai une expertise particulière dans les technologies front-end comme
            React, mais je suis également compétent en back-end avec Node.js et Express.
          </p>
          {/*
            - Paragraphe de présentation.
          */}
          <h3>Mes Compétences</h3>
          {/*
            - Sous-titre pour les compétences.
          */}
          <div className="mb-3">
            {/*
              - Un conteneur pour la barre de progression HTML.
              - mb-3: Marge en bas (margin-bottom) de 3 unités (selon Bootstrap).
            */}
            <span>HTML</span>
            {/*
              - Le texte "HTML" au-dessus de la barre de progression.
            */}
            <div className="progress">
              {/*
                - La barre de progression Bootstrap.
              */}
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '95%' }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {/*
                  - La partie remplie de la barre de progression.
                  - width: '95%': Définit le pourcentage de remplissage.
                  - Les attributs aria-* sont pour l'accessibilité.
                */}
                95%
                {/*
                  - Le texte à l'intérieur de la barre de progression (le pourcentage).
                */}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span>CSS</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '90%' }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span>JavaScript</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '85%' }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span>React</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '80%' }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span>Node.js</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
          </div>
          {/*
            - Vous pouvez ajouter d'autres compétences ici.
          */}
        </div>
      </div>
    </section>
  );
}

export default APropos;