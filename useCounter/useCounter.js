
import { useState } from "react";

export const useCounter = (initialState = 0) => {
  
    const [counter, setCounter] = useState(initialState);

    const reset = () => {
        setCounter(initialState);
    };

    const increment = (factor = 1) => {
        setCounter(counter + factor);

        return true;
    };

    const decrement = (factor = 1) => {
        setCounter(counter - factor);

        return true;
    };

    const cyclicCount = (state, length) => {
        setCounter( (state+length) % length );
    };

    return {
        counter, 
        cyclicCount,
        reset, 
        increment, 
        decrement
    };

}
