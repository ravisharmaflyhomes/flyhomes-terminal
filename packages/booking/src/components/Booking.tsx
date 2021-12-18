
import * as React from 'react';
import {Button} from '@flyhomesTerminal/common';

interface BookingObj{
    name: string
}

const Booking : React.FC<BookingObj> = (props)=>{
    return (<div>
        <h1>Booking Home Page</h1>
        {props.name}
        <Button onClick={()=>{console.log("I am in Booking")}}/> 
    </div>);
}

export default Booking;