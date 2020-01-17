import React from 'react'
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4'

function App () {
  return (
    <div>
      <img src={logo} alt="logo" width={40}/>
      <video src={video} width={360} controls poster={logo}>

      </video>


      Pabtab el mas crack de todos los tiempos
    </div>
  )
}

export default App