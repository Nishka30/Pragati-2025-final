import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/MLMania.png"; // Import the image

const ML_MANIA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About:
      "With a blend of quizzes and hands-on coding, teams of two will navigate the complexities of machine learning, from foundational theories to applied projects. Test your skills in Python, impress the judges with innovative solutions, and vie for the top spot in this machine learning showdown.",
    Timeline: "02:00 pm to 05:00 pm , 5th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹50/Head </li>
        <li> EXTERNAL STUDENTS: ₹100/Head </li>
      </ul>
    ),
    Contacts: (<ul>
    <li>Sakangsa Parui: +91 6289833095</li>
    <li>Semanti Ghosh: +91 9748662318</li>
  </ul>),
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2",
    title: "ML MANIA",
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
            <h3>ML MANIA</h3>
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
              <a href="https://forms.gle/gS6k8LUjyFBbjs2W7">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1hWeS5tX5dAQdOs3mUniCOQODN85SHhyy/view?usp=drive_link">
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

export default ML_MANIA;
