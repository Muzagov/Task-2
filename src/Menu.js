import React, { Component } from 'react';

class Menu extends React.Component {
  render() {
    return (
      //**
      //* Меню навигации
      //**
      <div className="menu">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              ОДЕЖДА
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ДЕТЯМ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              КНИГИ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              КОМПЬЮТЕРЫ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              КОНТАКТЫ
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Menu;
