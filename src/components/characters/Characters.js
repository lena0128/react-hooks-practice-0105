import React, { } from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { fetchSWAPI } from '../utils';


function Characters(){
    const [characters, setCharacters] = useState([])
    
    // componentDidMount <= make a fetch request in this lifecycle method
    // we need an empty array for dependency as a second argument to get rid of looping 
    useEffect(() => {
        fetchSWAPI("people")
          .then(data => setCharacters(data.results))
        
        // componentWillUnMount <= should return a callback function
        // this is a CLEANUP function that will reset the planets back to default
        return () => {
              console.log("Characters component unmounted")
              setCharacters([])
        }      
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log("characters updated")  
    }, [characters])

    return (
        <div>
            <h1>All Characters</h1>
            <ul>
                {characters.map((c, idx) => <li key={idx}>{c.name}</li>)}
            </ul>
        </div>
    );
}

export default Characters
