/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import styles from "./Home.module.css";

function logout() {
  return auth.signOut();
  navigate("/");
}

function Home(props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1>
          <Link to="/login">Go back to log in</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Go gack to sign up</Link>
        </h1>
        <h2>{props.name ? `Welcome ${props.name}` : "Sign in "}</h2>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

export default Home;
