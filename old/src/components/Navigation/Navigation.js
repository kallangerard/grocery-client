import React from 'react';
import './Navigation.css';

export const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <ul className="navigation-list">
          <li>
            <a href="/groceries" className="navigation-brand">
              Inventory
            </a>
          </li>
          <li className="navigation-item">
            <a href="/scan" className="navigation-link">
              Scan
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
