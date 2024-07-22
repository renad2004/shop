import React from 'react';
import Category from './Catogory/Catogory';
import Price from './price/price';
import './SideBar.css';
import Color from './color/color'; // Corrected to 'Color'
import './SideBar.css';

const Sidebar = ({ handleChange, handlePriceChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <h3>Catogory</h3>
      <Category handleChange={handleChange} />
      {/* <Price handleChange={handlePriceChange} />   */}
      <Color handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;