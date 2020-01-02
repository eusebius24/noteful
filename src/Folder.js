import React from 'react';
import './App.css'
function Folder(props) {
   
        return(
   
            <div className="folder" id={props.id}>
                <h2>{props.name}</h2>
        
            </div>
            );
   
       
  
}

export default Folder;