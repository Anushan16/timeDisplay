import React, { useState } from "react";



const App = () => {

  

  let [timeNow, getCurrentTime] = useState(new Date().toLocaleTimeString())

  function getTime(){
     let time = new Date().toLocaleTimeString();
    
    getCurrentTime(timeNow = time)

    
  }

  setInterval(getTime,1000)
  return (
      <div className="container">
        <h1>{timeNow}</h1>
        <button onClick = {getTime} >Get Time</button>
      </div>
     );
  
     }

export default App;
