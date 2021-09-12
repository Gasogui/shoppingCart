// Ensaladas.js
import React from 'react';
import '../../styles/layout/Salad.css';
import CardList from '../pieces/CardList';

const Salad = () => {
  return (
    <section id="Ensaladas">
      <div><h3>Ensaladas</h3></div>
      <hr />
      <CardList props={'Ensaladas'} />
      <br />
    </section>
  )
}

export default Salad;