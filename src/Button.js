import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="card-button">
        <button className="btn" onClick={() => this.props.setBought(this.props.id)} disabled={this.props.bought}>
          Добавить в корзину
        </button>
      </div>
    );
  }
}
export default Button;
