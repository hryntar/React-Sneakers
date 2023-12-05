import React from "react";

function Drawer({ onCloseCart, items = [], onRemove }) {
   return (
      <aside className="overlay ">
         <div className="cart">
            <h3 className="cart__title">
               <span>Корзина</span>
               <div onClick={onCloseCart} className="item-cart__remove icon-plus"></div>
            </h3>
            
            {items.length ? (
               <>
                  <div className="cart__items">
                     {items.map((item) => (
                        <div key={item.id} className="cart__item item-cart">
                           <div className="item-cart__image">
                              <img src={item.image} alt="Sneakers" />
                           </div>
                           <div className="item-cart__body">
                              <h4 className="item-cart__name">{item.title}</h4>
                              <b className="item-cart__price">{item.price} грн.</b>
                           </div>
                           <div onClick={() => onRemove(item.id)} className="item-cart__remove icon-plus"></div>
                        </div>
                     ))}
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
               </>
            ) : (
               <div className="cart__empty empty-cart">
                  <img className="empty-cart__image" src="@img/cart-empty.png" alt="Cart empty" />
                  <h4 className="empty-cart__title">Корзина порожня</h4>
                  <p className="empty-cart__text">Добавте товари які хочете придбати в корзину</p>
                  <button onClick={onCloseCart} className="empty-cart__btn ">
                     Назад до покупок
                  </button>
               </div>
            )}
         </div>
      </aside>
   );
}

export default Drawer;
