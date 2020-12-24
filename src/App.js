import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import { addToDatabaseCart, getDatabaseCart } from "./utilities/storageManager";
import UsersData from "./components/UsersData/UsersData";

function App() {
   const [loaging, setLoading] = useState(false);
   const [user, setUser] = useState({});
   const [search, setSearch] = useState("");
   const [data, setData] = useState({});

   // addToDatabaseCart(user.id, Math.random());

   /* searching github users by user name ======================== */
   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await axios.get(`http://api.github.com/users/${search}`);
            setUser(response.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [search]);

   /* Adding items to cart and setting product Id to local storage ====================== */
   const handleAddProduct = (prod) => {
      addToDatabaseCart(prod, Math.random());
   };

   useEffect(() => {
      const getData = getDatabaseCart();
      setData(getData);
   }, []);

   return (
      <div className="App">
         <h4>Here starts our app</h4>
         <input
            type="text"
            className="form-control w-50"
            onBlur={(e) => setSearch(e.target.value)}
            placeholder="search user"
         />

         <button
            onClick={() => {
               handleAddProduct(user.id);
            }}
         >
            ADD
         </button>

         <UsersData user={user} />
      </div>
   );
}

export default App;
