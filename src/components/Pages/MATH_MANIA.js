import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/MathManiaPoster.png"; // Import the image

const MATH_MANIA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "👨‍🏫 Solve the Problem, Conquer the Chaos! Put on your thinking caps and get ready for Math Mania—a thrilling journey of numbers, puzzles, and logic presented by PRAGATI 2025 starting from 4th to 6th February 2025! 🧮✨ Compete with the sharpest minds and show off your problem-solving skills. It's not just about calculations; it’s about strategy, teamwork, and creativity! 💡💪",
    Timeline: "10:00 am to 05:00 pm , 4th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹50/Head </li>
        <li> EXTERNAL STUDENTS: ₹100/Head </li>
      </ul>
    ),
    Contacts: "Anusmita Adhikary (6289784580), Rupsa Nandy (9007413395)",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2",
    title: "MATHMANIA",
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
            <h3>MATH MANIA</h3>
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
              <a href="https://forms.gle/FhMuZimV4ynrhxyG9">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1dIxPg9rgd_lZpVaf8lk7Nle8kb301WWe/view?usp=drive_link">
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

export default MATH_MANIA;
