import React from 'react'
import '../css/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='homeContent'>
        <div className='homeText'>
          <p>Success Stories</p>
          <br />
          <h1>START WİTH YOU</h1>
        </div>
        <br />
        <button className='homeButton' onClick={() => window.location.href = '#hero'}>
          Devamını Gör
        </button>
        <a href='#hero' className='scrollButton'><i class="fa-solid fa-arrow-down"></i></a>
      </div>
    </div>
    
    
  )
}

export default Home
