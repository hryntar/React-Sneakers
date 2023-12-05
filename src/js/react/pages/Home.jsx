import React from "react";
import Card from "../components/Card.jsx";

export default function Home({
   searchValue,
   setSearchValue,
   data,
   addToCart,
   addToFavorite,
   cartItems,
   favorited
}) {
   return (
      <main className="main">
         <div className="main__container">
            <div className="main__header">
               <h2 className="main__heading">{searchValue ? `Пошук по запиту "${searchValue}"` : "Всі кросівки"}</h2>
               <div className="main__search search">
                  <div className="search__icon-search icon-search"></div>
                  <input
                     className="search__input"
                     maxLength="20"
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                     placeholder="Пошук..."
                     type="text"
                  />
                  {searchValue ? <div onClick={() => setSearchValue("")} className="search__icon-remove icon-plus"></div> : null}
               </div>
            </div> 
            <div className="main__items">
               {data
                  .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((obj) => (
                     <Card 
                        key={obj.id} 
                        data={obj} 
                        onClickPlus={() => addToCart(obj)} 
                        onClickFavorite={() => addToFavorite(obj)}
                        isAdded={cartItems.some(item => item.id === obj.id)}
                        isFavorited={favorited.some(item => item.id === obj.id)} 
                     />
                  ))}
            </div>
         </div>
      </main>
   );
}
