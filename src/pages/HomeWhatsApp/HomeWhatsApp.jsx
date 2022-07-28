import React from "react";
import Contacts from "../../components/Contacts";
import ShearchBox from "../../components/ShearchBox";
import HeaderChat from "../../components/HeaderChat";
import "./HomeWhatsApp.css";

export default function HomeWhatsApp() {
  return (
    <div className="HomePage">
      <div className="headerHome">
        <HeaderChat />
      </div>
      <div className="inputBox">
        <ShearchBox />
      </div>
      <div className="Chats">
        <Contacts />
      </div>
    </div>
  );
}
