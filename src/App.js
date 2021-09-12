// App.js
//import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Salad from './components/layout/Salad';
import Wraps from './components/layout/Wraps';
import Bowls from './components/layout/Bowls';
import Pizzas from './components/layout/Pizzas';
import Footer from './components/layout/Footer';
//import CardList from './components/pieces/CardList';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Salad />
      <Bowls />
      <Wraps />
      <Pizzas />
      <Footer />

    </div>
  );
}

export default App;
