import React from "react";
import contacts from "../contacts";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card"  >
        <div className="top" >
          <h2 className = "name">{props.name}</h2>
          <img className = "circle-img" 
            src={props.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className= "bottom">
          <p className = " info">{props.phone}</p>
          <p  >{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
