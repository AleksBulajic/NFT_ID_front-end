import React from 'react';
import './home.css';

const ArtCollection = ({ arts }) => {
  return (
    <div className="art-collection">
      {arts.map((art, index) => (
        <div key={index} className="art-item">
          {art.type === 'image' ? (
            <img src={art.image} alt={art.name} />
          ) : (
            <video src={art.image} autoPlay loop muted playsInline />
          )}
          <h2>{art.name}</h2>
        </div>
      ))}
    </div>
  );
};


export default ArtCollection;
