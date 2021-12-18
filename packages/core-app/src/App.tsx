import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Tours} from '@flyhomesTerminal/tour';
import {Booking} from '@flyhomesTerminal/booking'

function App() {
  return (
    <div className="App">
          <Tours name={"Tour App"}/>
          {<Booking name={"Booking App"}/> }
    </div>
  );
}

export default App;
