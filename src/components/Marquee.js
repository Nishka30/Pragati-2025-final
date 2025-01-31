import React, { useState, useEffect } from "react";
import "./marquee.css";

function Marquee() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Main Navbar */}
      <nav className={`marquee ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-marquee">
          <marquee direction="left" scrollamount="7">
            💠Overlapping events must be taken care of during online
            registration. Time management of playing the overlapping events is
            the sole responsibility of the participant. If a student misses any
            event because of time overlapping then no blame can be imposed onto
            the organizing committee or on the institution.💠The last date for
            registration and payment for MCKVIE students is 2nd February. No
            further submissions will be accepted beyond this date.
          </marquee>
        </div>
      </nav>

      {/* Second Marquee below the navbar */}
      {/*<div className="secondary-marquee">
        <marquee direction="left" scrollamount="7">
          The last date for registration and payment for MCKVIE students is 27th
          January. No further submissions will be accepted beyond this date.
        </marquee>
      </div>*/}
    </div>
  );
}

export default Marquee;
