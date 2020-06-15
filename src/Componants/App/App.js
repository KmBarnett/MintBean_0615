import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl'

import './App.css';

console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
function App() {
  let mapContainer
  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: mapContainer,
  //     style: 'mapbox://styles/kmbarnett/ckbgqnk350rfz1ipidif98e98/draft',
  //     center: [-77.04, 38.907],
  //     zoom: 14
  //   });
  // },[])


  return (
    <main className="App">
      <header className="App-header">
        <h1>MintBean_0615</h1>
      </header>
      <div ref={el => mapContainer = el} id='map'>
      </div>
    </main>
  );
}

export default App;
