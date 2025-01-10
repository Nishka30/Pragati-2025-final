import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/InovativeIdea.jpg"; // Import the image

const InnovativeIdeaContest = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About:
      "The guidelines ask for articles in specific topics and a specific format for new ideas. Presentations should be in PowerPoint and include the problem, solution, and why the solution is unique and possible.",
    Timeline: "10:00 am to 05:00 pm , 5th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹100/Team </li>
        <li> EXTERNAL STUDENTS: ₹200/Team </li>
      </ul>
    ),

    Contacts: (<ul>
      <li>Sankalp Kumar Yadav: +91 8420332119</li>
      <li>Ashutosh Tiwari: +91 7294896723</li>
      <li>Rupsa Nandy: +91 9007413395</li>
      <li>Anusmita Adhikary: +91 6289784580</li>
    </ul>),
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 1-6",
    title: "Innovative Idea Contest",
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
            <h3>Innovative Idea Contest</h3>
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
              <a href="https://forms.gle/LdnRcMHx8UmEeawCA">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/1_mmmtFnqOhsf2HdcMyYZFivKkAYLtApw/view?usp=sharing">
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

export default InnovativeIdeaContest;
