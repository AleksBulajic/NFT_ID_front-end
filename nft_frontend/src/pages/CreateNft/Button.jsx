import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './createnft.css';

const ImageCapture = () => {
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setShowCamera(false);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setImageSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div>
      <button onClick={() => setShowCamera(true)}>Open Camera</button>
      {showCamera && (
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={handleCapture}>Capture photo</button>
          <button onClick={() => setShowCamera(false)}>Close Camera</button>
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleUpload} ref={fileInputRef} />
      {imageSrc && (
        <div>
          <img src={imageSrc} alt="NFT" style={{ width: '100px', height: '100px' }} />
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default ImageCapture;
