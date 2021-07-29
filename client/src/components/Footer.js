import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-description">
        <h2 className="text-4xl">Subscribe to our newsletter</h2>
        <p className="text-2xl font-light mt-4">
          Promotions, new products and sales. Directly to your inbox.
        </p>
      </div>
      <div className="subscription-container">
        <input placeholder="Your Email" className="email-input" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
