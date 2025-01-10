import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/EnigmaP.png"; // Import the image

const ENIGMA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "🕵‍♀ Enigma: The Ultimate Treasure Hunt! Get ready to dive into the most thrilling ⚡ Treasure hunt as Enigma, presented by PRAGATI 2025, the Annual Technical Fest of MCKV Institute of Engineering (MCKVIE)",
    Timeline: "10:00 am to 05:00 pm , 5th February .",
    RegistrationFee: "₹50 per head (in-house & external participants).",
    Contacts: "Parna Biswas - +91 7439453055, Aritra Chatterjee - +91 62977 14155",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2-3",
    title: "ENIGMA (Treasure Hunt)",
  };

  return (
    <div>
      <Background />
      <Background2 />
      <section className="event-section">
        <div className="content">
          <div className="card">
            <img src={card.image} alt={card.title} />
            <div className="overlay">
              <span>{card.rating}</span>
              <h2>{card.title}</h2>
            </div>
          </div>
          <div className="info">
            {/* Added Heading */}
            <h3>ENIGMA</h3>
            <div className="tabs">
              {Object.keys(tabsContent).map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.replace(/([A-Z])/g, " $1").trim()}
                </button>
              ))}
            </div>
            <p>{tabsContent[activeTab]}</p>
            <div className="button-group">
              <a href="https://forms.gle/JXPuaw1Dak3pRRav8">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1mBKfwrOdbsUXFtSAKWim_VwbKWsTtrYn/view?usp=drive_link">
                <button className="btn">Rule Book</button>
              </a>
              <a href="https://drive.google.com/file/d/1CeJkurMsE851m-eSa88T71toqM5iU6sS/view?usp=sharing">
                <button className="btn">General Rule</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ENIGMA;
