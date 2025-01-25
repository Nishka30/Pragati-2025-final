import React, { useState } from "react";
import "./css/notice.css";

const Notice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Floating Circle */}
      <div className="floating-window" onClick={toggleModal}>
        <div className="floating-content">
          <p>‼️</p>
        </div>
      </div>

      {/* Modal Box */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Important Notice !!</h2>
            <p>
              💠Overlapping events must be taken care of during online
              registration. Time management of playing the overlapping events is
              the sole responsibility of the participant. If a student misses
              any event because of time overlapping then no blame can be imposed
              onto the organizing committee or on the institution.
            </p>
            <p>
              💠The last date for registration and payment for MCKVIE students
              is 30th January. No further submissions will be accepted beyond
              this date.
            </p>
            <button className="close-button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notice;
