import React, { useEffect, useState } from "react";

const AudioPermission = () => {
  const [permission, setPermission] = useState(false);

  // function takes audio permission by checking the getUsermedia api returns
  // mediaStream object
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        // setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(() => setPermission(true))
    .catch(() => setPermission(false));
  },[])

  return (
    <div>
      <h2>Audio Recorder</h2>
      <main>
        <div className="audio-controls">
          {permission ? (
            <p style={{color: "rgb(0, 255, 21)"}}>Microphone permission granted</p>
            ) : (
              <button
              className="btn2"
              onClick={getMicrophonePermission}
              type="button"
              >
              Allow Microphone
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default AudioPermission;