import React from 'react';
import {Route, NavLink, Link} from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';

function Notepane(props) {
    const notes = props.notes.map(note => {
        return ( 
            <Link to={`/notes/${note.id}`} key={note.id}><Note key={note.id} name={note.name} content={note.content} folderId={note.folderId} modified={note.modified} /></Link>
        )
    })
    console.log('notes:', notes);
   

    const folders = props.folders.map(folder => {
       
        return (
            <NavLink to={`FolderViews/FolderView${folder.name}`} key={folder.id}><Folder key={folder.id} activeClassName = "active" name={folder.name} selectFolder={folder.selectFolder}/></NavLink>
            );
      })
    console.log('folders:', folders);
    return (
        
     <main className='App'>
     
      <div className="maincontent">
            <div className="sidebar">
               {folders}
            </div>
            <div className="notepane">
                {notes}
            </div>
        </div>
    
     </main>
        
    );
    
}

export default Notepane;