import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { getToken } from "./GetData";

const api= "https://accounts.spotify.com/api/token";
function App() {
  const [token, setToken]= useState('');

   useEffect (()=>{
    getToken(api)
   .then(data => setToken(data.access_token))
   .catch(error=> {
     console.error(error);
   });
}, []);
   
  return (
    <>
    <main className="App">
      <Header />
      <Search accessToken={token} />
      <SearchResults />
      </main>
    </>
  );
}

export default App;
