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
    <div className="d-flex flex-column align-items-center h-50">
      <h1 className="mb-3">Re Captach Tutorial</h1>
      <form>
        <div className="mb-3" style={{ width: 500 }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
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
           {!emailValid && <p className="text-danger">Please enter a valid email address</p>}
        </div>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_TEST_KEY}
          onChange={recaptchaChange}
        />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!verify}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecaptchaForm;
