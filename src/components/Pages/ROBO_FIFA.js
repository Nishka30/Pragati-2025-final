import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/RoboFIFA.jpg"; // Import the image

const ROBO_FIFA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About:
      "Design a robot which plays soccer. The robot would compete against others in 1-1 matches. Arena Specifications: -Will be SURPRISE.",
    Timeline: "10:00 am to 05:00 pm , 4th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹100/Team </li>
        <li> EXTERNAL STUDENTS: ₹400/Team </li>
      </ul>
    ),
    Contacts: "AHELEE MUKHERJEE (+91 8274819991), ROHAN SASMAL (+91 84207 67816), APURBA BAIRAGYA (+91 7076435759)",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2-4",
    title: "ROBO FIFA",
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
            <h3>ROBO FIFA</h3>
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
              <a href="https://forms.gle/kB3RmRnx8EQzRxY99">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1PUxYabxxJBKCwY00nrFZc8SNm4Yi4jPw/view?usp=drive_link">
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

export default ROBO_FIFA;
