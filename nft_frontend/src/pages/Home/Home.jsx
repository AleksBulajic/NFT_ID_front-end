import React from 'react'
import IdCard from '../../components/IdCard/IdCard'
import './home.css'
import '../../App.css'

const Home= () => {
  return (
    <div className = "page-container">
        <h1 className = "page-title">Hello and Welcome!</h1>
        <IdCard />
    </div>
  )
}

export default Home;
