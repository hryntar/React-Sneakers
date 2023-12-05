
import React from "react";

const Card = ({data, onClickPlus, onClickFavorite, isFavorited = false, isAdded = false}) => {

   const [isInCart, setIsInCart] = React.useState(isAdded);
   const [isInFavorite, setisInFavorite] = React.useState(isFavorited);

   function plusClick() {
      onClickPlus();
      setIsInCart(!isInCart);
   }
   
   function favoriteClick() {
      onClickFavorite();
      setisInFavorite(!isInFavorite);
   }
   
   return (
      <div className="main__item item">
         <div onClick={favoriteClick} className={`item__favorite-icon ${isInFavorite ? `icon-favourite-filled` : `icon-favourite`}`}></div>
         <div className="item__img">
            <img src={data.image} alt="Sneakers" />
         </div>
         <h3 className="item__name">{data.title}</h3>
         <div className="item__info">
            <div className="item__price">
               <span>Ціна:</span>
               {data.price} грн.
            </div>
            <div onClick={plusClick} className={`item__add ${isInCart ? `icon-check` : `icon-plus`} `} ></div>
         </div>
      </div>
   );
};

export default Card;
