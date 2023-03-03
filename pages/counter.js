import React, {useState} from "react";
import { Button } from '@mui/material';

export default function CounterPage() {
    const [counter, setCounter] = useState(0);

    const incrementData = () => {
        if(counter >= 0 && counter <=9){
            const incrementValue = counter + 1;
            setCounter(incrementValue)
        }
    }

    const decrementData = () => {
        if(counter != 0){
            const decrementValue = counter - 1;
            setCounter(decrementValue)
        }
    }

    return (
        <div className='flex flex-col item-center'>
            <div className='text-center p-6'>Counter page
            <div className= 'flex space-between item-center justify-center my-12'>
                <Button variant="outlined" onClick={()=>incrementData()}>Increment</Button>
                <div className='mx-12'>Value: {counter} </div>
                <Button variant="outlined" onClick={()=>decrementData()}>Decrement</Button>
            </div>
            </div>
        </div>
    )
}