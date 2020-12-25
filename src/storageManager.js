/* Initializing the key ============================ */
const getUser = () => {
   const existingUser = sessionStorage.getItem("userId");
   if (existingUser) {
      return existingUser;
   } else {
      const newUser = "user-" + new Date();
      sessionStorage.setItem("userId", newUser);
      return newUser;
   }
};

const getDataKey = () => {
   const userId = getUser();
   return `github/users/${userId}`;
};

/* pushing data to local storage: a temporary place for database ======================= */
const addToDatabase = (key, count) => {
   const currentUser = getFromDatabase();
   currentUser[key] = count;
   localStorage.setItem(getDataKey(), JSON.stringify(currentUser));
};

/* Retrieving data from database ===========================*/
const getFromDatabase = () => {
   const dataKey = getDataKey();
   const data = localStorage.getItem(dataKey) || "{}";
   return JSON.parse(data);
};

/* Removing data from database ======================= */
const removeFromDatabase = (key) => {
   const currentUser = getFromDatabase();
   delete currentUser[key];
   localStorage.setItem(getDataKey(), JSON.stringify(currentUser));
};

// const processOrder = (cart) => {
//    localStorage.removeItem(getDataKey());
// };

export { addToDatabase, getFromDatabase, removeFromDatabase };

// polyfill to support older browser
const localStorage =
   window.localStorage ||
   (() => {
      let store = {};
      return {
         getItem(key) {
            return store[key];
         },
         setItem(key, value) {
            store[key] = value.toString();
         },
         clear() {
            store = {};
         },
      };
   })();

const sessionStorage =
   window.sessionStorage ||
   (() => {
      let store = {};
      return {
         getItem(key) {
            return store[key];
         },
         setItem(key, value) {
            store[key] = value.toString();
         },
         clear() {
            store = {};
         },
      };
   })();
// end of poly fill
