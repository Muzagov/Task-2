import check from './shopping-cart-solid.svg';
import React, { Component } from 'react';

class Checkout extends React.Component {
  render() {
  	// **
  	// * Принимаем пропс из компонента App
  	// **
    const newProduct = this.props.newCheck;

    // **
  	// * Пускаем пропс через filter
  	// **

    const nal = newProduct.filter((item) => {
      if (item.bought === true) 
      return item.bought;
    });
    return (
      <div className="checkout">
        <img src={check}></img>
        <span className="counter">{nal.length}</span>
      </div>
    );
  }
}
export default Checkout;
