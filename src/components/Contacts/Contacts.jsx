import React, { useEffect, useState } from "react";
import { getContacts } from "../../services/WhatsAppAPIService";
import "./Contacts.css";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((data) => {
      console.log(data);
      setContacts(data);
    });
  }, []);

  return (
    <div className="generalContacts">
      <div>
        {contacts.map((contato, index) => (
          <div key={index} className="contacts">
            <div className="divider">
            <img
              src={contato.imagemUrl}
              alt="Foto do Contato"
              className="PersonPhoto"
            />
            <div className="text-chat">
              <span>{contato.nome}</span>
              <p>conversando llalala</p>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
