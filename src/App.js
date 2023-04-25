import React from "react";
import "./App.css";
import { useState, useRef } from "react";
import RecaptchaForm from "./Components/RecaptchaForm";
import Location from "./Components/Location";
import AudioPermission from "./Components/AudioPermission";
import VideoRecorder from "./Components/VideoRecorder";

function App() {
  let [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };
  return (
    <>
      <RecaptchaForm />
      <Location />
      <div>
        <h1>React Media Recorder</h1>
        <div className="button-flex">
          <button onClick={toggleRecordOption("video")}>Record Video</button>
          <button onClick={toggleRecordOption("audio")}>Record Audio</button>
        </div>
        <div>
          {recordOption === "video" ? <VideoRecorder /> : <AudioPermission />}
        </div>
      </div>
    </>
  );
}

export default App;
