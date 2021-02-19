import React, { useState, useEffect } from "react";
import "./Bottom.css";

const Bottom = () => {
  const [selectedTab, setTab] = useState("");

  useEffect(() => {
    let location = window.location.pathname.split("/")[1];

    switch (location) {
      case "pashu-suvidhaen":
        setTab("pashu");
        break;
      case "sell":
        setTab("sell");
        break;
      case "community":
        setTab("chat");
        break;
      case "profile":
        setTab("profile");
        break;
      case "habits":
        setTab("profile");
        break;
      default:
        setTab("home");
    }
  }, []);

  return (
    <div className="Bottom">
      <a href="/" className={selectedTab === "home" ? "active" : null}>
        <img
          src={
            selectedTab === "home"
              ? "https://static-assets.animall.in/static/images/menu-home-active.png"
              : "https://static-assets.animall.in/static/images/menu-home.png"
          }
          crossOrigin="anonymous"
          alt="Animall Home"
        />{" "}
        <span>पशु ख़रीदें</span>
      </a>
      <a href="/sell" className={selectedTab === "sell" ? "active" : null}>
        <span></span>{" "}
        <img
          src={
            selectedTab === "sell"
              ? "https://static-assets.animall.in/static/images/menu-sell-active.png"
              : "https://static-assets.animall.in/static/images/menu-sell.png"
          }
          crossOrigin="anonymous"
          alt="Sell Pashu"
        />{" "}
        <span>पशु बेचें</span>
      </a>
      <a
        href="/community"
        className={selectedTab === "chat" ? "pop-menu active" : "pop-menu"}
      >
        <div className="wrap">
          <img
            src={
              "https://static-assets.animall.in/static/images/menu-community.png"
            }
            crossOrigin="anonymous"
            alt="Community"
          />{" "}
          <span>पशु चैट</span>
        </div>
      </a>
      <a
        href="/pashu-suvidhaen"
        className={selectedTab === "pashu" ? "active" : null}
      >
        <img
          src={
            selectedTab === "pashu"
              ? "https://static-assets.animall.in/static/images/menu-suvidha-active.png"
              : "https://static-assets.animall.in/static/images/menu-suvidha.png"
          }
          crossOrigin="anonymous"
          alt="Pashu Suvidhaen"
        />{" "}
        <span>पशु सुविधाएँ</span>
      </a>
      <a
        href="/profile"
        className={selectedTab === "profile" ? "active" : null}
      >
        <img
          src={
            selectedTab === "profile"
              ? "https://static-assets.animall.in/static/images/menu-profile-active.png"
              : "https://static-assets.animall.in/static/images/menu-profile.png"
          }
          crossOrigin="anonymous"
          alt="Show Profile"
        />{" "}
        <span>प्रोफाइल</span>
      </a>
    </div>
  );
};

export default Bottom;
