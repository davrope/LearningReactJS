import React from 'react';
import Timer from './Timer';

const Landing = ()=>{
    return(
        <div style = {{textAlign: 'center'}}>
            <h1>
                Lappital productivity app!
            </h1>
            Manage your projects with a pomodoro time tracker.

            <div>
                <Timer/>
            </div>
        </div>
    )
}

export default Landing;