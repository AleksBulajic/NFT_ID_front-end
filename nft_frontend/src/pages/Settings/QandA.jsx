import React, { useContext} from 'react'
import ThemeContext from './ThemeContext';
import './settings.css';


const QandA= () => {
  const { themeColor } = useContext(ThemeContext);

  return (
    <div className = "qa-container" style={{ backgroundColor: themeColor }}>
        <h1 className = "title">Q&A</h1>
    </div> 
  )
}

export default QandA;
