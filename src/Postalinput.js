import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Rings } from 'react-loader-spinner';
import "./Postalinput.css"

const Postalinput = ({locationUpdate}) => {

    const [postalCode, setPostalCode] =useState("");
    const [loadingState, setLoadingState] = useState(false);

    const getLocationInfo = async () => {
        try {
            setLoadingState(true);
             const res = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
             console.log(res.data);
             locationUpdate(res.data);
        }

        catch(error){
            console.log(error);
            window.alert('API request failed. Please try again.');
        }
        finally {
            setLoadingState(false)
        }
    }

    const clearInfo = () => {
        setPostalCode("");
        locationUpdate("")
    }


  return (
    <div className='input'>
        <input type='text' placeholder='Enter Postal Code' value={postalCode} onChange={(e) => {
            setPostalCode(e.target.value);
        } } />
        <div className='btns'>
        <button onClick={getLocationInfo}>Get Info</button>
        <button onClick={clearInfo}>Clear Info</button></div>
        {loadingState && (
        <div className="loader">
           <Rings color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </div>
  )
}

export default Postalinput