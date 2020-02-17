import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Folder(props) {
   if (props.selected === true) {
    return (
        <div className="folder" id={props.id} onClick={props.selectFolder} style={{background: "#95e4f4"}}>
            <h2>{props.folder_name}</h2>
        </div>
        );
   } else {
    return (
        <div className="folder" id={props.id} onClick={props.selectFolder}>
            <h2>{props.name}</h2>
    
        </div>
        );
   } 
}

export default Folder;

Folder.propTypes = {
    folder_name: PropTypes.string.isRequired
};