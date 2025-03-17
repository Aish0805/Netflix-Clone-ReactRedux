import React, { useRef } from "react";
import "./SignupScreen.css";
import { Link } from "react-router-dom";

function SignupScreen() {
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault(); // stops the refresh
    // auth
    //   .createUserWithEmailAndPassword(
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   )
    //   .then((authUser) => {
    //     console.log(authUser);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };
  const signIn = (e) => {
    e.preventDefault(); // stops the refresh
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button
          type="button"
          className="signupScreen__getStarted"
          
        >
          <Link to="/home" style={{textDecoration:"none",color:"white"}}>Sign In</Link>
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up Now. 
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
