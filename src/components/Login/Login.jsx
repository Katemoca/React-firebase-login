import styles from "./Login.module.css";
import { useState } from "react";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Esto es para conectarnos a firebase
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const start = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Information is incomplete");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      // eslint-disable-next-line no-unused-vars
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Log in</h1>
        <InputControl
          label="Email"
          onChange={(event) => {
            setValues((previous) => ({
              ...previous,
              email: event.target.value,
            }));
          }}
          placeholder="Write your email"
        />
        <InputControl
          label="Password"
          onChange={(event) => {
            setValues((previous) => ({
              ...previous,
              password: event.target.value,
            }));
          }}
          placeholder="Write your password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={start} disabled={submitButtonDisabled}>
            Click to log in
          </button>
          <p>
            You need to sign up
            <span>
              <Link to="/signup"> Click here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
