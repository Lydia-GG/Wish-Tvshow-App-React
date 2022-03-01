import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container  d-flex justify-content-between align-items-center">
        <div className="social-media d-flex align-items-center">
          <h6>Follow us on :</h6>
          <ul className="d-flex list-unstyled">
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="fab fa-twitter-square"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
        <h6> WishTvshow&copy;. All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
