import React, { Component, useState } from 'react';
import Menu from './Menu';
import Logo from './Logo/Logo.js';
import Checkout from './Checkout/Checkout.js';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <Menu />

        //**
        //* Передаём пропс в компонент Checkout
        //**
        
        <Checkout newCheck={this.props.products} />
        <a href="#">Выход</a>
      </div>
    );
  }
}

export default Header;
