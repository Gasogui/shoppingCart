// CardList.js
import React from 'react';
import Card from './Card';
import data from '../../data/dataList.js';


function CardList({ props }) {

  const filterProduct = data.products.filter(prod => prod.category.includes(props));

  const filtered = filterProduct.map((prod, index) => <Card props={prod} key={index} />);

  return (
    <div>
      {filtered}
    </div>
  );
}

export default CardList;