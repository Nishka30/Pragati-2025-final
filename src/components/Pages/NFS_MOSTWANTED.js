import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/Nfs.jpg"; // Import the image

const NFS_MOSTWANTED = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About:
      "Dive into the adrenaline-pumping world of NFS Most Wanted, where you outrun rivals and evade cops in heart-stopping street races. Claim the top spot on the blacklist in this ultimate pursuit of speed and freedom!",
    Timeline: "02:00 pm to 05:00 pm , 4th February .",
    RegistrationFee: (
      <ul>
        <li>MCKVIE STUDENTS: ₹50/Head </li>
        <li> EXTERNAL STUDENTS: ₹100/Head </li>
      </ul>
    ),
    Contacts:   <ul>
    <li>Soumyadip Dara: +91 8513927347</li>
    <li>Partha Sarathi Hazra: +91 7044940669</li>
  </ul>,
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : Solo",
    title: "NFS (MOST WANTED)",
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
            <h3>NFS(MOST WANTED)</h3>
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
              <a href="https://forms.gle/Zao4vLGjBJ461tjY9">
                <button className="btn">Register</button>
              </a>
              <a href="https://drive.google.com/file/d/18efLt01d-7z3afATKhwQcu0eoi7MCNce/view?usp=drive_link">
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

export default NFS_MOSTWANTED;
