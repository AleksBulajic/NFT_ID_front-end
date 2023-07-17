import React from 'react';
import { useSpring, animated } from 'react-spring';
import './home.css';

const ArtItem = ({ art }) => {
    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 200,
    });

    return (
        <animated.div className="art-item" style={animation}>
            {art.type === 'image' ? (
                <img src={art.image} alt={art.name} />
            ) : (
                <video src={art.image} autoPlay loop muted playsInline />
            )}
            <h2>{art.name}</h2>
        </animated.div>
    );
};

const ArtCollection = ({ arts }) => {
    return (
        <div className="art-collection">
            {arts.map((art, index) => (
                <ArtItem key={index} art={art} />
            ))}
        </div>
    );
};

export default ArtCollection;





