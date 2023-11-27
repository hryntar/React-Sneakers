import React from "react";
const Card = () => (
      <div className="main__item item">
         <div className="item__favorite-icon icon-favourite"></div>
         <div className="item__img">
            <img src="@img/products/sneakers-01.jpg" alt="Sneakers" />
         </div>
         <h3 className="item__name">Чоловічі кросівки Nike Blazer Mid Suede</h3>
         <div className="item__info">
            <div className="item__price">
               <span>Ціна:</span>
               12 999 грн.
            </div>
            <div className="item__add icon-plus"></div>
         </div>
      </div>
   );

export default Card;
