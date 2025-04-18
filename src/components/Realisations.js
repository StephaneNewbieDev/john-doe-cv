import React from 'react';
import styles from './Realisations.module.css';
import espaceBienEtre from '../images/espace-bien-etre.jpg';
import freshFood from '../images/fresh-food.jpg';
import restaurantJaponais from '../images/restaurant-japonais.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Realisations() {
  return (
    <section className={`container ${styles.realisations}`}>
      {/*
        - Section "Réalisations" avec une classe CSS module et une classe Bootstrap "container".
      */}
      <h2>Mes Réalisations</h2>
      {/*
        - Titre de la section.
      */}
      <div className="row">
        {/*
          - Une ligne pour organiser les cartes de réalisation.
        */}
        <div className="col-md-4 mb-4">
          {/*
            - Colonne pour chaque carte (prend le tiers de la largeur sur les écrans moyens et grands).
            - mb-4: Marge en bas de 4 unités (Bootstrap).
          */}
          <div className="card h-100">
            {/*
              - Carte Bootstrap avec une hauteur de 100%.
            */}
            <img src={espaceBienEtre} alt="Espace Bien-être" className="card-img-top" />
            {/*
              - Image de la réalisation.
              - card-img-top: Classe Bootstrap pour placer l'image en haut de la carte.
            */}
            <div className="card-body">
              {/*
                - Corps de la carte.
              */}
              <h5 className="card-title">Espace Bien-être</h5>
              {/*
                - Titre de la réalisation.
              */}
              <p className="card-text">
                Site web pour un centre de bien-être, avec réservation en ligne et galerie photo.
              </p>
              {/*
                - Description de la réalisation.
              */}
              <a href="#" className="btn btn-primary">Voir le projet</a>
              {/*
                - Lien vers le projet (à remplacer par l'URL réelle).
                - btn-primary: Style de bouton Bootstrap.
              */}
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={freshFood} alt="Fresh Food" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Fresh Food</h5>
              <p className="card-text">
                Application web pour la commande de repas à domicile, avec suivi de livraison en temps réel.
              </p>
              <a href="#" className="btn btn-primary">Voir le projet</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={restaurantJaponais} alt="Restaurant Japonais" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Restaurant Japonais</h5>
              <p className="card-text">
                Site vitrine pour un restaurant japonais, avec menu interactif et système de réservation.
              </p>
              <a href="#" className="btn btn-primary">Voir le projet</a>
            </div>
          </div>
        </div>
        {/*
          - Vous pouvez ajouter d'autres réalisations ici.
        */}
      </div>
    </section>
  );
}

export default Realisations;