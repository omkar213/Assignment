import React from "react";
import "./App.css";
import RecaptchaForm from "./Components/RecaptchaForm";
import Location from "./Components/Location";
import AudioPermission from "./Components/AudioPermission";


function App() {
  return (
    <>
      <RecaptchaForm />
      <Location/>
      <AudioPermission/>
    </>
  );
}

export default App;
