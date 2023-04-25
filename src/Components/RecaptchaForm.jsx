import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaForm = () => {
  const [verify, setVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  // recpatcha verify function
  const recaptchaChange = (value) => {
    setVerify(true);
  };

  // email input change handler
  const handleInputchange = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <div className="recaptcha-container">
      <form className="form-container">
      <h1 className="heading">Re Captach</h1>
        <div className="form-div">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameinput"
          />
          <label htmlFor="email" className="">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleInputchange}
          />
           {!emailValid && <p className="warning-text">Please enter a valid email address</p>}
        </div>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_TEST_KEY}
          onChange={recaptchaChange}
          className="recaptcha"
        />
        <button
          type="submit"
          className="submit-btn"
          disabled={!verify}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecaptchaForm;
