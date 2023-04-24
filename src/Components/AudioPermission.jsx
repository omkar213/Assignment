import React, { useEffect } from 'react'

const AudioPermission = () => {

   const getLocalStream = () => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
  }

  useEffect(() => {
    getLocalStream();
  })

  return (
    <div>AudioPermission : True</div>
  )
}

export default AudioPermission