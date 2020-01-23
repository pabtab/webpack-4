import React from 'react'
import logo from '../../images/platzi.png';

import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';


function App () {
  async function handleClick() {
    const { alerta } = await import('./alert');
    alerta('this module upload dynamically')
  }
  return (
    <div>
      <p className="sass">
        sass
      </p>
      <p className="less">
        less
      </p>
      <p className="stylus">
        stylus
      </p>
      <p className="post-css">
        post css
      </p>
      <img src={logo} alt="logo" width={40}/>
      <button onClick={handleClick}>
        Alerta dynamic
      </button>
    </div>
  )
}

export default App