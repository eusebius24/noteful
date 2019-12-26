import React from 'react';
import './App.css'
function Folder(props) {
    if (props.name === 'Important' && window.location.href.includes('Important') ) {
        return(
   
            <div className="folder selected" id={props.id} onClick={props.selectFolder}>
                <h2>{props.name}</h2>
        
            </div>
            );
    } else if (props.name === 'Super' && window.location.href.includes('Super') ) {
        return(
   
            <div className="folder selected" id={props.id} onClick={props.selectFolder}>
                <h2>{props.name}</h2>
        
            </div>
            );
        } else if (props.name === 'Spangley' && window.location.href.includes('Spangley')) {
            return(
       
                <div className="folder selected" id={props.id} onClick={props.selectFolder}>
                    <h2>{props.name}</h2>
            
                </div>
                );
            } else {return(
   
                <div className="folder" id={props.id} onClick={props.selectFolder}>
                    <h2>{props.name}</h2>
            
                </div>
                );
        }
  
}

export default Folder;