import React, { useState, useEffect } from "react";

export const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export const useUserMedia = (requestedMedia) => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        setMediaStream(stream);
      } catch (err) {
        console.log("error occurred:", err);
      }
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia is not supported!");
    } else {
      enableStream();
    }

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [mediaStream, requestedMedia]);

  return mediaStream;
};

const UserPermissionsComponent = () => {
  const [hasGeoPermission, setHasGeoPermission] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMicPermission, setHasMicPermission] = useState(false);

  const location = useGeoLocation();
  const cameraStream = useUserMedia({ video: true });
  const micStream = useUserMedia({ audio: true });

  useEffect(() => {
    if (location.loaded && !location.error) {
      setHasGeoPermission(true);
    }
  }, [location]);

  useEffect(() => {
    if (cameraStream) {
      setHasCameraPermission(true);
    }
  }, [cameraStream]);

  useEffect(() => {
    if (micStream) {
      setHasMicPermission(true);
    }
  }, [micStream]);

  return (
    <div>
      <h2>User Permissions</h2>
      <p>
        Geolocation permission: {hasGeoPermission ? "granted" : "not granted"}
      </p>
      <p>
        Camera permission: {hasCameraPermission ? "granted" : "not granted"}
      </p>
      <p>Mic permission: {hasMicPermission ? "granted" : "not granted"}</p>
    </div>
  );
};

export default UserPermissionsComponent;
