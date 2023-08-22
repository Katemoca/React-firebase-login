import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Aquí usamos la info de FIREBASE y las herramientas de FIREBASE
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";

import styles from "./SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const register = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("All fields must completed");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, { displayName: values.name });
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
        <h1 className={styles.heading}></h1>
        <InputControl
          label="Name"
          placeholder="Write your name"
          onChange={(event) => {
            setValues((previous) => ({
              ...previous,
              name: event.target.value,
            }));
          }}
        />
        <InputControl
          label="Email"
          placeholder="Write your email"
          onChange={(event) => {
            setValues((previous) => ({
              ...previous,
              email: event.target.value,
            }));
          }}
        />
        <InputControl
          label="Password"
          placeholder="Write your password"
          onChange={(event) => {
            setValues((previous) => ({
              ...previous,
              password: event.target.value,
            }));
          }}
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={register} disabled={submitButtonDisabled}>
            SAVE
          </button>
          <p>
            If you already have an account you can
            <span>
              <Link to="/login"> log in </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
