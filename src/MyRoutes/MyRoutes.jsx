import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import { auth } from "../firebase";
import { useEffect, useState } from "react"; // Aquí es necesario para ver cómo se encuentra el estado del user

function MyRoutes() {
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home name={userName} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
