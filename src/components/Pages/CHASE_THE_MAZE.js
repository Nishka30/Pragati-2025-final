import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/chazethemaize.jpg"; // Import the image

const CHASE_THE_MAZE = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About:
      "To build a robot that is able to navigate out of the maze in the quickest time possible from the designated starting point to the ending point.",
    Timeline: "10:00 am to 05:00 pm , 5th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹100/Team </li>
        <li> EXTERNAL STUDENTS: ₹400/Team </li>
      </ul>
    ),
    Contacts: (<ul>
      <li>Ahelee Mukherjee: +91 8274819991</li>
      <li>Rohan Sasmal: +91 8420767816</li>
      <li>Apurba Bairagya: +91 7076435759</li>
    </ul>),
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2",
    title: "CHASE THE MAZE",
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
            <h3>CHASE THE MAZE</h3>
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
              <a href="https://forms.gle/16KiXi9v59opxndb7">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1J4mWrKWCL2adRpLlP_m_KSY98MjRblg8/view?usp=drive_link">
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

export default CHASE_THE_MAZE;
