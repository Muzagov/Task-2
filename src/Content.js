import React, { Component, useState } from 'react';
import Card from './Card';

class Content extends React.Component {
  render() {

  	//**
  	//* Принимаем пропс из компонента App
  	//**

    const checkContent = this.props.products.map((product) => {
      return <Card product={product} 
      setBought={this.props.setBought} />;
    });

    return <div className="content">{checkContent}</div>;
  }
}
export default Content;
