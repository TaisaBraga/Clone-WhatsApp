import React, { useEffect, useState } from "react";
import { getContacts } from "../../services/WhatsAppAPIService";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((data) => {
      console.log(data);
      setContacts(data);
    });
  }, []);

  return (
    <div>
      <div>
        {contacts.map((contato, index) => (
          <div key={index}>{contato.nome}</div>
        ))}
      </div>
    </div>
  );
}
