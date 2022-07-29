import React from "react";
import "./Contacts.css";

export default function Contacts({ name, photo }) {
  return (
    <>
      <div className="AllContacts">
        <img src={photo} alt="Foto do Contato" className="PersonPhoto" />

        <div className="CloseMessages">
          <span className="ContactName">{name}</span>
          <p className="ContactMessage">lldalasadldasalalal</p>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}
