import React from "react";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const axios = require("axios");

const url = `http://26.82.111.77:8000`;

const App = () => {
   const [data, setData] = useState([]);
   console.log(`${url}/cart`);
   const [cartOpened, setCartOpened] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   const [favorited, setFavorited] = useState([]);

   const [searchValue, setSearchValue] = useState(""); 

   useEffect(() => {
      async function fetchData(){ 
         const cartResponse = await axios.get(`${url}/cart`);
         console.log(cartResponse.data);
         const favoritesResponse = await axios.get(`${url}/favorites`);
         
         const itemResponse = await axios.get(`${url}/products`); 
         
         setCartItems(cartResponse.data); 
         setFavorited(favoritesResponse.data);
         setData(itemResponse.data); 
      };
      fetchData(); 
   }, []);

   function addToCart(obj) {
      if (cartItems.find(item => item.id === obj.id)) { 
         axios.delete(`${url}/cart/${obj.id}`);
         setCartItems((prev) => prev.filter(item => item.id !== obj.id)); 
      } else {
         axios.post(`${url}/cart`, obj);
         setCartItems((prev) => [...prev, obj]);
      }
       
   }
   function addToFavorite(obj) {
      if (favorited.find((f) => f.id === obj.id)) {
         setFavorited((prev) => prev.filter((f) => f.id !== obj.id));
         axios.delete(`${url}/favorites/${obj.id}`);
      } else {
         setFavorited((prev) => [...prev, obj]);
         axios.post(`${url}/favorites`, obj);
      }
   }

   function removeFromCart(id) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      axios.delete(`${url}/cart/${id}`);
   }

   return (
      <>
         {cartOpened && <Drawer onRemove={(id) => removeFromCart(id)} items={cartItems} onCloseCart={() => setCartOpened(false)} />}
         <div className="container-main">
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
               <Route
                  path="/favorites"
                  element={
                     <Favorites 
                        favorited={favorited} 
                        addToCart={addToCart} 
                        addToFavorite={addToFavorite}
                        cartItems={cartItems}
                     />
                  }
               ></Route>
               <Route
                  path="/"
                  element={
                     <Home
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        data={data}
                        addToCart={addToCart}
                        addToFavorite={addToFavorite}
                        cartItems={cartItems}
                        favorited={favorited}
                     ></Home>
                  }
               ></Route>
            </Routes>
         </div>
      </>
   );
};

export default App;
