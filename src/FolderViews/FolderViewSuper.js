import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Folder from '../Folder';
import Note from '../Note';
import NotefulContext from '../NotefulContext';

class FolderViewSuper extends React.Component {
    static contextType = NotefulContext;
    render() {
       
        const { folders, notes } = this.context;
        const foldersList = folders.map(folder => {
            return (
                <NavLink to={`FolderView${folder.name}`} key={folder.id}><Folder key={folder.id} name={folder.name} selectFolder={folder.selectFolder} activeClassName = "selected"/></NavLink>
                );
          })
        
        const notesList = notes.map(note => {
            if (note.folderId === "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1") {
                return <Link to={`/notes/${note.id}`} key={note.id}><Note key={note.id}  id={note.id} name={note.name} content={note.content} modified={note.modified} folderId={note.folderId} /></Link>
            } else{return ''};
        })
        
    
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

export default FolderViewSuper;