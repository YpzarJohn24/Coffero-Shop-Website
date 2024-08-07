import React from "react";
import chef1 from "../../assets/images/team-1.jpg";
import chef2 from "../../assets/images/team-2.jpg";
import chef3 from "../../assets/images/team-3.jpg";
import chef4 from "../../assets/images/team-4.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./team.css";

const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section__title" data-title="Chefs">
        Meet Our Experts
      </h2>
      <div className="team__grid grid container">
        <div className="team__item">
          <img src={chef1} alt="chef" className="team__img" />
          <div className="team__data">
            <h3 className="team__name">Sophie Bennett</h3>
            <p className="team__job">Latte Art Expert & Trainer</p>
          </div>

          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={chef2} alt="chef" className="team__img" />
          <div className="team__data">
            <h3 className="team__name">Jason Keller</h3>
            <p className="team__job">Executive Pastry Chef</p>
          </div>

          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={chef3} alt="chef" className="team__img" />
          <div className="team__data">
            <h3 className="team__name">Marco Ricci</h3>
            <p className="team__job">Head Barista & Coffee Specialist</p>
          </div>

          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team__item">
          <img src={chef4} alt="chef" className="team__img" />
          <div className="team__data">
            <h3 className="team__name">Emily Thompson </h3>
            <p className="team__job">Dessert Chef & Coffee Connoisseur</p>
          </div>

          <div className="team__socials">
            <a href="/" className="team__social-link">
              <FaFacebookF />
            </a>
            <a href="/" className="team__social-link">
              <FaTwitter />
            </a>
            <a href="/" className="team__social-link">
              <FaLinkedinIn />
            </a>
            <a href="/" className="team__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
