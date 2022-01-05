import React, { useState, useEffect } from 'react';
import { fetchSWAPI } from '../utils';

function Planets(){
    // STEP 1: use state hook to define our state
    const [planets, setPlanets] = useState([])
    
    // STEP 2: make a fecth request to fecth data
    // componentDidMount
    useEffect(() => {
        fetchSWAPI("planets")
          .then(data => setPlanets(data.results))
          
        // componentWillUnMount <= needs to return a callback function
        // this is a CLEANUP function that will reset the planets back to default
        return () => {
            console.log("Planets going to unmount")
            setPlanets([])
        }  
    }, [])


    // STEP 4 - check if the data needs update
    // componentDidUpdate
    useEffect(() => {
        console.log("Planets needs update!")
    }, [planets])

    // STEP 3- map the data to the DOM
    return (
        <div>
            <h1>All Planets</h1>
            <ul>
                {planets.map((p, idx) => <li key={idx}>{p.name}</li>)}
            </ul>
        </div>
    );
}

export default Planets