import React from 'react'
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';


function App () {
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
    </div>
  )
}

export default App