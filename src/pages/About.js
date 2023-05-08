import React from "react";
import "./About.css"
import photo1 from "../asests/photo1.jpg";
import photo2 from "../asests/photo2.jpg";
import photo3 from "../asests/photo3.jpg";

export default function About() {
  return (
    <div className="About">
      
      
      <h1>Our Team</h1>
      <div className="team">
        <div className="member">
          <img src={photo2} alt="Team Member 1" />
          <h3>Baigaziev Erzhan</h3>
          <p>Co-Founder, CEO</p>
          <p>Baigaziev Erzhan is one of the founders of this site. He is always passionate about technology and games, and when he had the opportunity to create a gadget store for gamers, Erzhan decided to use the opportunity. Since the site was launched, it has devoted a lot of time and energy to creating the best experience for gamers by offering the best gadgets.</p>
        </div>
        <div className="member">
          <img src={photo3} alt="Team Member 2" />
          <h3>Baigaziev Aigul</h3>
          <p>Co-Founder, SPONSOR</p>
          <p>Baigaziev Augul is the main sponsor of the site, which provides support and assistance in the development and promotion of business. With its investment, Aigul has enabled the site to get started and succeed in selling gadgets to gamers. Thanks to her generosity, the site has every opportunity to develop and improve its activities.</p>
        </div>
        <div className="member">
          <img src={photo1} alt="Team Member 3" />
          <h3>Samira Salmahunova</h3>
          <p>Lead Designer</p>
          <p>Salmahunova Samira is one of the leading website designers. She is responsible for the design and user interface, making the site convenient and attractive to users. Samira has vast experience in web design and always strives to make the site as easy and enjoyable to use as possible.</p>
        </div>
      </div>
    </div>
  );
}
