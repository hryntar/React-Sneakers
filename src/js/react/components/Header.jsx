import React from "react";
import { Link } from "react-router-dom";

function Header({ onClickCart }) {
   return (
      <header className="header">
         <div className="header__container">
            <Link to="/">
               <div className="header__body">
                  <img src="@img/logo.svg" alt="Logo" className="header__logo" />
                  <h1 className="header__heading">
                     REACT SNEAKERS <br />
                     <span>Магазин найкращих кросівок</span>
                  </h1>
               </div>
            </Link>

            <div className="header__menu menu">
               <nav className="menu__body">
                  <ul className="menu__list">
                     <li className="menu__item menu__cart">
                        <a href="#" onClick={onClickCart} className="menu__link">
                           Корзина
                        </a>
                     </li>
                     <li className="menu__item menu__favorite">
                        <Link to="/favorites" className="menu__link">
                           Вподобане
                        </Link>
                     </li>
                     <li className="menu__item menu__profile">
                        <a href="#" className="menu__link">
                           Профіль
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}

export default Header;
