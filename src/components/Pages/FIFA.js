
import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/eFOOTBALL.jpg"; // Import the image


const FIFA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "",
    Timeline: "",
    RegistrationFee: "",
    Contacts: "For any query contact:",
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
            <h3>eFOOTBALL</h3>
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
            <a href="https://forms.gle/zv3RxC6FiVCudVY89"><button className="btn">Register</button></a>
              <a href="https://drive.google.com/file/d/1UIMv9nz9aXmwfVpVZMiInlWCpA7HK9Eo/view?usp=drive_link"><button className="btn">Rule Book</button></a>
              <a href="https://drive.google.com/file/d/1CeJkurMsE851m-eSa88T71toqM5iU6sS/view?usp=sharing"><button className="btn">General Rule</button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FIFA;
