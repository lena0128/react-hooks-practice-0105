import React, { useState } from 'react';
import About from './About';
import Characters from './characters/Characters';
import Planets from './planets/Planets';
import Starships from './starships/Starships';

function Pages(){
    const [page, setPage] = useState("about")

    function renderPage(){
        switch(page){
            case "about":
                return <About />

            case "characters":
                return <Characters />

            case "planets":
                return <Planets />
                
            default:
                return <Starships />    
        }
    }
    
    // note that in the event handler we need a callback function that contains a behavior 
    return(
        <div>
            <nav>
                <button onClick={() => setPage("about")}>About</button>
                <button onClick={() => setPage("characters")}>Characters</button>
                <button onClick={() => setPage("starships")}>Starships</button>
                <button onClick={() => setPage("planets")}>Planets</button>
            </nav>
            <div>
                {renderPage()}
            </div>
        </div>
    )

}

export default Pages