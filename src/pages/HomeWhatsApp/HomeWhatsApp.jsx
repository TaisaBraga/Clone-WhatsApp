import React, {useEffect, useState} from "react";
import { getContacts } from "../../services/WhatsAppAPIService";
import Contacts from "../../components/Contacts";
import ShearchBox from "../../components/ShearchBox";
import HeaderChat from "../../components/HeaderChat";
import "./HomeWhatsApp.css";

export default function HomeWhatsApp() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((data) => {
      console.log(data);
      setContacts(data);
    });
  }, []);

  return (
    <div className="HomePage">
      <div className="headerHome">
        <HeaderChat />
      </div>
      <div className="inputBox">
        <ShearchBox />
      </div>
      <div className="Chats">
        {/*Aqui o Map*/}
        {contacts.map((contato, index) => (
          <Contacts key={index} name={contato.nome} photo={contato.imagemUrl}/>
        ))}
      </div>
    </div>
  );
}
