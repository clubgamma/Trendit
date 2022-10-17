import React from "react";
import './about.css'

function AboutUS(props) {
  return (
    <div className="pt-5 pb-3">
      <h3>About Us</h3>
        <div className="about">
            <div className="des">
                <h4>Description</h4>
                <p>This project is about building a website that provides top trending keywords from all over the internet (Google Trends, Twitter, Youtube, FB, Instagram ) using API.</p>
            </div>
            <div className="pur">
                <h4>Purpose</h4>
                <p>Using keywords from Trendit, a content creator can have the right idea on what to create or what keywords they can post to get maximum reach.</p>
            </div>
        </div>
      <div>
        
      </div>
    </div>
  );
}

export default AboutUS;
