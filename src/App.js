import './App.css';
import LocationInfo from './LocationInfo';
import Postalinput from './Postalinput';
import React, {useState} from 'react';

function App() {


  const [locationData, setLocationData] = useState("");
  return (
    <div className="App">
      <h1>Please Enter Postal Code Here:</h1>
      <Postalinput locationUpdate={setLocationData}/>
      <LocationInfo location={locationData}/>
    </div>
  );
}

export default App;
