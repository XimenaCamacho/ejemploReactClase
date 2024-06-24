import { Route, Router, Routes } from "react-router-dom";
import { UserProvider } from "./Components/Contexts/UserContext";
import { CharacterProvider } from "./Components/Contexts/CharacterContext";
import Characters from "./Components/Characters";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Users/Profile";
import CharacterDetails from "./Components/CharacterDetails";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <UserProvider>
        <CharacterProvider>
          <Header />
          <main>
            <Router basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path="/" index element={<Characters />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Router>
          </main>
          <Footer />
        </CharacterProvider>
      </UserProvider>
    </div>
  );
}

export default App;

// import { Route, Routes } from "react-router-dom";
// import { UserProvider } from "./contexts/UserContext";
// import Layout from "./Layout";
// import Characters from "./characters/Characters";
// import CharacterDetails from "./characters/CharacterDetails";
// import Login from "./users/Login";
// import Register from "./users/Register";
// import Profile from "./users/Profile";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <UserProvider>
//       <div className="app">
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Characters />} />
//             <Route path="/character/:id" element={<CharacterDetails />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </div>
//     </UserProvider>
//   );
// }

// export default App;
