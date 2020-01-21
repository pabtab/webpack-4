import React, {useState} from 'react'
import data from './data.json';
import Loader from './loader.js';

function App () {
  const [loaderList, setLoaderList] = useState([])
  
  const handleClick = () => {
    setLoaderList(data.loaders)
  }
  return (
    <div>
      <h3>Beautiful App</h3>
      <ul>
        {
          loaderList.map((item) => <Loader {...item} key={item.id} />)
        }
      </ul>
      <button onClick={handleClick}>
        Show Elements
      </button>
    </div>
  )
}

export default App