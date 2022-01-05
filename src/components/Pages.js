import React, { useState } from 'react';

function Pages(){

    return(
        <div>
            <nav>
                <button>About</button>
                <button>Characters</button>
                <button>Starships</button>
                <button>Planets</button>
            </nav>
            <div>
                {/* Individual Page goes Here (About/Starships/etc.) */}
            </div>
        </div>
    )

}

export default Pages