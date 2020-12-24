import React from "react";

const UsersData = ({ user }) => {
   const { avatar_url, name, repos_url } = user;

   console.log(repos_url);

   return (
      <div>
         <img src={avatar_url} alt="" />

         <h4>Name: {name}</h4>

         {/* {repos_url.map((elem) => (
            <h4>Repo Name: {elem.name}</h4>
         ))} */}
      </div>
   );
};

export default UsersData;
