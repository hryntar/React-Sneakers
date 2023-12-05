import React from "react";
import Card from "../components/Card.jsx";

export default function Home({addToCart, addToFavorite, favorited, cartItems}) {

   return (
      <main className="main">
         <div className="main__container">
            <div className="main__header">
               <h2 className="main__heading">Вподобане</h2>
            </div>
            <div className="main__items">
               {favorited.map((obj) => (
                     <Card 
                        key={obj.id} 
                        isFavorited={true} 
                        data={obj} 
                        onClickPlus={() => addToCart(obj)} 
                        onClickFavorite={() => addToFavorite(obj)} 
                        isAdded={cartItems.some(item => item.id === obj.id)}
                     />
                  ))}
            </div>
         </div>
      </main>
   );
}
