import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Services from './components/Services';
import Realisations from './components/Realisations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import MentionsLegales from './components/MentionsLegales';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/a-propos" component={APropos} />
          <Route path="/services" component={Services} />
          <Route path="/realisations" component={Realisations} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/mentions-legales" component={MentionsLegales} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;