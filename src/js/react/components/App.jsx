import React from "react";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Drawer from "./Drawer.jsx";

const App = () => (
   <>
      <Drawer/>
      <Header/>
      <main className="main">
         <div className="main__container">
            <div className="main__header">
               <h2 className="main__heading">Всі кросівки</h2>
               <div className="main__search search">
                  <div className="search__icon icon-search"></div>
                  <input className="search__input" placeholder="Пошук..." type="text" />
               </div>
            </div>
            <div className="main__items">
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
            </div>
         </div>
      </main>
   </>
);

export default App;
