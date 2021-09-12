// Card.js
import React from 'react';
import '../../styles/pieces/Card.css'

function Card({ props }) {

  return (
    <>
      <div className="product">

        <div className="product-image">
          <img className="image" alt={props.name} src={props.imgPath} />
        </div>

        <div className="product-info">

          <div className="product-info-top">
            <h2>{props.name}</h2>
          </div>

          <div className="product-info-discription">
            <p>{props.ingredients}</p>
          </div>

          <div className="product-info-down">

            <div className="product-price">
              <h3>${props.price}</h3>
            </div>
            <div>
              <button type="button" className="button-add-product">+</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Card;