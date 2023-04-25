import React from "react";
import "./App.css";
import { useState} from "react";
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
    <div className="App">
      <div className="main-container">
        <RecaptchaForm />
        <Location />
      </div>

      <div className="recorder-container">
        <h1>React Media Recorder</h1>
        <div className="button-flex">
          <button className="btn1" onClick={toggleRecordOption("video")}>Record Video</button>
          <button className="btn2" onClick={toggleRecordOption("audio")}>Allow Audio</button>
        </div>
        <div>
          {recordOption === "video" ? <VideoRecorder /> : <AudioPermission />}
        </div>
      </div>
    </div>
  );
}

export default App;
