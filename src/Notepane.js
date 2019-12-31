import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
import NotefulContext from './NotefulContext';

class Notepane extends React.Component {
  
    static contextType = NotefulContext;
    
   
    render() {
        const { folders, notes } = this.context;
        const notesList = notes.map(note => {
            return ( 
                <Link to={`/notes/${note.id}`} key={note.id}><Note key={note.id} id={note.id} name={note.name} content={note.content} folderId={note.folderId} modified={note.modified} /></Link>
            )
        })
        console.log('notes:', notes);
        const foldersList = folders.map(folder => {
       
            return (
                <NavLink to={`FolderViews/FolderView${folder.name}`} key={folder.id}><Folder key={folder.id} activeClassName = "active" name={folder.name} selectFolder={folder.selectFolder}/></NavLink>
                );
          })
        console.log('folders:', folders);
        return (
            
         <main className='App'>
         
          <div className="maincontent">
                <div className="sidebar">
                   {foldersList}
                </div>
                <div className="notepane">
                    {notesList}
                </div>
            </div>
        
         </main>
            
        );
    }
    
    
}

export default Notepane;