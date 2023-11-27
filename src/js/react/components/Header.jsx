import React from "react";

function Header() {
   
   return (
      <header className="header">
      <div className="header__container">
         <div className="header__body">
            <img src="@img/logo.svg" alt="Logo" className="header__logo" />
            <h1 className="header__heading">
               REACT SNEAKERS <br />
               <span>Магазин найкращих кросівок</span>
            </h1>
         </div>
         <div className="header__menu menu">
            <nav className="menu__body">
               <ul className="menu__list">
                  <li className="menu__item menu__cart">
                     <a href="#" className="menu__link">
                        1205 грн.
                     </a>
                  </li>
                  <li className="menu__item menu__favorite">
                     <a href="#" className="menu__link">
                        Вподобане
                     </a>
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
   )
}

export default Header;