import * as React from 'react';

interface Props{
   onClick: ()=> void;
}

const Button : React.FC<Props> = (props)=>{
    return (<button {...props}>Click Me</button>);
}

export default Button;