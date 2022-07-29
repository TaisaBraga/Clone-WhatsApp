import React, { useEffect, useState } from "react";
import MessageHeader from "../../components/MessageHeader";
import { getMessage } from "../../services/WhatsAppAPIService";
import "./WhatsAppMessages.css";

export default function WhatsAppMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessage().then((response) => {
      console.log(response);
      setMessages(response);
    });
  }, []);

  return (
    <div className="WhatsAppMessages">
      <div className="header">
        <MessageHeader />
      </div>
    </div>
  );
}
