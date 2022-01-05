import React, { useState, useEffect } from 'react';
import { fetchSWAPI } from '../utils';

function Starships() {
    // we need an array of all the starships objects
    const [starships, setStarships] = useState([])

    // componentDidMount <= we pass an empty array as the second argument (dependency)
    // because we want this fetch request happen when component is mounting
    useEffect(() => {
        console.log("mounting starships")
        fetchSWAPI("starships")
            .then(data => setStarships(data.results))

        // componentWillUnmount <= use a callback function for this one
        return () => {
            console.log("unmounting starships")
            setStarships([])
        }
    }, [])

    // componentDidUpdate <= we pass in the startships array as the dependency 
    // because we want to update the component whenever the data changes 
    useEffect(() => {
        console.log("updating starship")
    }, [starships])

    return (
        <div>
            <h1>All Starships</h1>
            <ul>
                {starships.map((s, idx) => <li key={idx}>{s.name}</li>)}
            </ul>
        </div>
    );
}
 
export default Starships;