import React from 'react';
import {Link} from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
function FolderView(props) {
  
    const folders = props.folders.map(folder => {
        return (
            <Folder key={folder.id} name={folder.name} selectFolder={props.selectFolder} /> //Link each folder to its own `FolderView${folder.name}`
            );
      })
    return (
     <main className='App'>
      

      <div className="maincontent">
            <div className="sidebar">
                {folders}
            </div>
            <div className="notepane">
                <Note />
                <Note />
                
            </div>
        </div>
    
     </main>
        
    );
    
}

export default FolderView;