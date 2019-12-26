import React from 'react';

function Note(props) {
    
   
    return(
        <div className="note">
        <h2>{props.name}</h2> 
          <div className="notefooter">
          <p>Date modified: {props.modified}</p>
          <button>Delete note</button>
        </div>
         
      </div>
    );
}

export default Note;