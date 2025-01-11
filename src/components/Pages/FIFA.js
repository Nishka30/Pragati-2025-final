import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/eFOOTBALL.jpg"; // Import the image

const FIFA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: " ⚽🔥Your Game, Your Strategy, Your Victory! 🎉Are you ready to kick off an unforgettable gaming experience? As part of our vibrant PRAGATI 2025, we are thrilled to present eFOOTBALL Mobile 2025⚽– the ultimate virtual football tournament!🎮⚡ ",
    Timeline: "10:00 am to 05:00 pm , 5th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹50/Head </li>
        <li> EXTERNAL STUDENTS: ₹100/Head </li>
      </ul>
    ),
    Contacts: "Rounak Bhadra: +917439249804",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : Solo",
    title: "eFootball",
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
            <h3>eFOOTBALL Mobile 2025</h3>
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
              <a href="https://forms.gle/zv3RxC6FiVCudVY89">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1UIMv9nz9aXmwfVpVZMiInlWCpA7HK9Eo/view?usp=drive_link">
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

export default FIFA;
