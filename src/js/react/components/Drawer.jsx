import React from "react";

function Drawer() {
   
   return (
      <aside style={{display: "none"}} className="overlay">
         <div className="cart">
            <h3 className="cart__title"><span>Корзина</span> <div className="item-cart__remove icon-plus"></div></h3>
            <div className="cart__items">
               <div className="cart__item item-cart">
                  <div className="item-cart__image"><img src="@img/products/sneakers-01.jpg" alt="Sneakers"/></div>
                  <div className="item-cart__body">
                     <h4 className="item-cart__name">Чоловічі кросівки Nike Air Max 270</h4>
                     <b className="item-cart__price">12 999 грн.</b>
                  </div>
                  <div className="item-cart__remove icon-plus"></div>
               </div>
               <div className="cart__item item-cart">
                  <div className="item-cart__image"><img src="@img/products/sneakers-01.jpg" alt="Sneakers"/></div>
                  <div className="item-cart__body">
                     <h4 className="item-cart__name">Чоловічі кросівки Nike Air Max 270</h4>
                     <b className="item-cart__price">12 999 грн.</b>
                  </div>
                  <div className="item-cart__remove icon-plus"></div>
               </div>
            </div>
            <div className="cart__info">
               <ul className="cart__price">
                  <li>
                     <span>Всього:</span>
                     <div></div>
                     <b>21 498 грн.</b>
                  </li>
                  <li>
                     <span>Збір на ЗСУ 5%:</span>
                     <div></div>
                     <b>1 074 грн.</b>
                  </li>
               </ul>
               <button className="cart__btn">Оформити замовлення</button>
            </div>
         </div>
      </aside>
   )
}

export default Drawer;