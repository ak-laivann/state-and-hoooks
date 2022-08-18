
import { useState } from 'react';
import './counter.css';

const Counter = () => {

    const [ smash,setSmash ] = useState(0);

    function handleButtonCLick() {
        setSmash(smash+1);
    }

    return (
        <div>
            <p>You have clicked {smash} times</p>
            <button onClick={handleButtonCLick}>Smash Me!</button>
        </div>
    );
};

export default Counter;