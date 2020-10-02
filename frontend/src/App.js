import React from 'react';
import data from './data'
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
   <div className="grid-container">
  <header className="header">
    <div className="brand">
      <button onClick={openMenu}>
        &#9776;
      </button>
    <a href="index.html">MechJet</a>
  </div>
    <div className="header-links">
      <a href="Sell.html" className="sellmenu">Sell</a>
      <a href="signin.html">Sign In</a>
    </div>  
  </header>
  <aside className="sidebar">
    <h2>Menu</h2>
    <button className="sidebar-close-button" onClick={closeMenu}> <b> X</b></button>
    <ul>
      <li><a href="index.html"><h4>About Us</h4></a></li>
      <li>
      <a href="signin.html"> 
      <h4> Sign In </h4>
       </a>
      </li>
    </ul>
  </aside>
<main className="main">
  <div className="content">
  <ul className="products">
  {
    data.products.map(product => <li>
      <div className="product">
        <img className="product-image" src={product.image} alt="product" />
        <div className="product-name"><a href="product.html"> {product.name}</a></div>
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">{product.price}</div>
      <div className="contact-details"><b>{product.contact}</b></div>
      <div className="product-rating">{product.rating} stars ({product.numReviews} Reviews)</div>
      </div>
    </li>
    )
  }
    </ul>
</div>
</main>
<footer className="footer">
  All right reserved.
</footer>
</div> 
  );
}

export default App;
