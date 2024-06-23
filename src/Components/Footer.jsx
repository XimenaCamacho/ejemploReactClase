// import React, { Component } from "react";
import "./Footer.css";

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#instagram">Instagram</a>
        <a href="#whatsapp">WhatsApp</a>
      </div>
      <div className="copyright">
        &copy; 2024 Ximena Camacho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// class Footer extends Component {
//   render() {
//     return (
//       <footer className="footer">
//         <div className="social-icons">
//           <a href="#facebook">Facebook</a>
//           <a href="#twitter">Twitter</a>
//           <a href="#instagram">Instagram</a>
//           <a href="#whatsapp">WhatsApp</a>
//         </div>
//         <div className="copyright">
//           &copy; 2024 Ximena Camacho. All rights reserved.
//         </div>
//       </footer>
//     );
//   }
// }

// export default Footer;
