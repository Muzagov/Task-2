import React, { Component } from 'react';
import Button from './Button';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.product.image} alt="" />
        </div>
        <div className="card-info">
          <div className="card-name">{this.props.product.name}</div>
          <div className="card-price">{this.props.product.price} ₽</div>
          <Button
            bought={this.props.product.bought}
            setBought={this.props.setBought}
            id={this.props.product.id}
          />
        </div>
      </div>
    );
  }
}
export default Card;
