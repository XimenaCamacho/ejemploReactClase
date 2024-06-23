// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
// export default Layout;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
