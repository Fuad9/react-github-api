import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import { addToDatabase, getFromDatabase, removeFromDatabase } from "./storageManager";

function App() {
   const [user, setUser] = useState({});
   const [search, setSearch] = useState("");
   const [data, setData] = useState({});
   const [userData, setUserData] = useState({});

   /* Searching github users by user name ======================== */
   useEffect(() => {
      const getData = async () => {
         try {
            const response = await axios.get(`http://api.github.com/users/${search}`);
            setUser(response.data);
         } catch (error) {
            console.log(error);
         }
      };
      getData();
   }, [search]);

   /* Reloading the page after clicking add or remove button ============================*/
   const reloadPage = () => {
      window.location.reload();
   };

   /* Saving user data in the localStorage ====================== */
   const handleAddProduct = (key, value) => {
      addToDatabase(key, value);

      reloadPage();
   };

   /* Retrieving user data from the localStorage ================= */
   useEffect(() => {
      const getData = getFromDatabase();
      setData(getData);
   }, []);

   useEffect(() => {
      const temp = Object.values(data);
      setUserData(temp.find((finalData) => finalData));
   }, [data]);

   /* Deleting user data from the localStorage ================= */
   const handleRemove = (key) => {
      removeFromDatabase(key);

      reloadPage();
   };

   return (
      <div className="App">
         <div className="mx-auto d-flex justify-content-center my-5">
            <input
               type="text"
               className="form-control w-50"
               onBlur={(e) => setSearch(e.target.value)}
               placeholder="search user"
            />

            {/* Handle adding user data */}
            <button
               onClick={() => {
                  handleAddProduct(user.id, user);
               }}
               className="btn btn-primary"
            >
               ADD
            </button>
         </div>

         <div className="d-flex justify-content-center" id="myDIV">
            {userData && (
               <div>
                  <div className="w-75">
                     <img className="w-75" src={userData.avatar_url} alt="" />
                  </div>

                  <h5>
                     <span>User Name:</span>
                     {userData.login} (
                     <a href={userData.repos_url} alt="">
                        Repositories
                     </a>
                     )
                  </h5>

                  <h5>
                     <span>Public Repos:</span>
                     {userData.public_repos}
                  </h5>

                  <h5>
                     <span>Created:</span>
                     {userData.created_at}
                  </h5>

                  <h5>
                     <span>Updated:</span>
                     {userData.updated_at}
                  </h5>

                  <h5>
                     <span>Followers:</span>
                     {userData.followers}
                  </h5>

                  {/* Handle deleting user data */}
                  <button onClick={() => handleRemove(userData.id)} className="btn btn-danger">
                     REMOVE
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}

export default App;
