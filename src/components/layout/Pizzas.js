// Pizzas.js
import React from 'react';
import '../../styles/layout/Pizzas.css';
import CardList from '../pieces/CardList';

const Pizzas = () => {
  return (
    <section id="Pizzas">
      Pizzas
      <hr />
      <CardList props={'Pizzas'} />
      <br />
    </section>
  )
}

export default Pizzas;