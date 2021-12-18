
import * as React from 'react';
import {Button} from '@flyhomesTerminal/common';

interface ToursObj{
    name: string
}

const Tours : React.FC<ToursObj> = (props)=>{
    return (<div>
        <h1>Tour Home Page</h1>
        {props.name}
        <Button onClick={()=>{console.log("I am in Tour")}}/>  
    </div>);
}

export default Tours;