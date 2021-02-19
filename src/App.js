import React, { useState, useEffect } from "react";
import "./App.css";

import Routes from "./Routes";

import Header from "./containers/Header/Header";
import Bottom from "./containers/Bottom/Bottom";

import { AppContext } from "./libs/contextLib";

const mockData = require("./mocks/data.json");

const App = () => {
  const [sellerPosts, setSellerPosts] = useState(null);
  const [habits, setHabits] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sellerPosts === null && habits === null && userData === null) onLoad();
  }, [habits, sellerPosts, userData]);

  const onLoad = () => {
    console.log("mockData", mockData);

    let user = mockData.users.filter(u => u.id === 1)[0];
    let posts = mockData.sellerposts.filter(p => p.userId === 1);
    let habits = mockData.habits.filter(h => h.userId === 1);

    setSellerPosts(posts);
    setUserData(user);
    setHabits(habits);
    setLoading(false);
  };

  return (
    <div className="main-app container">
      <Header />
      {!loading && (
        <AppContext.Provider
          value={{
            sellerPosts,
            setSellerPosts,
            habits,
            setHabits,
            userData,
            setUserData
          }}
        >
          <Routes />
        </AppContext.Provider>
      )}
      <Bottom />
    </div>
  );
};

export default App;
