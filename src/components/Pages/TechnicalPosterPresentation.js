import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/TechnicalPoster.png"; // Import the image

const TechnicalPosterPresentation = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About:
      "This is an event where you present your frame of reference towards the problem statement and come with effective ways or solutions with the help of proven resources.",
    Timeline: "02:00 pm to 05:00 pm , 4th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹100/Team </li>
        <li> EXTERNAL STUDENTS: ₹200/Team </li>
      </ul>
    ),
    Contacts: "For any query contact:  Sourav Ghosh: +91 9123737575, Lalita Bhattacharya: +918981511092",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 1-4",
    title: "Technical Poster Presentation",
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
            <h3>Technical Poster Presentation</h3>
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
              <a href="https://forms.gle/qj8CYqyaVZVj6gcP6">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1Dv67wc6FxhlPkccJo-TQVWm0zXnvlrzH/view?usp=drive_link">
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

export default TechnicalPosterPresentation;
