import HomeWhatsApp from "./pages/HomeWhatsApp";
import WhatsAppMessages from './pages/WhatsAppMessages'
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="empty"></div>
      <div className="whatsApp-body">
        <HomeWhatsApp />
        <WhatsAppMessages/>
      </div>
    </div>
  );
}

export default App;
