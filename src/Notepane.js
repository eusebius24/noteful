import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
import NotefulContext from './NotefulContext';
import './App.css';

class Notepane extends React.Component {
  
    static contextType = NotefulContext;
    
   
    render() {
        const { folders, notes } = this.context;
       
        const notesList = notes.map(note => {
            return ( 
               <Note key={note.id} id={note.id} name={note.name} content={note.content} folderId={note.folderId} modified={note.modified} history={this.props.history} />
            )
        })
        
        const foldersList = folders.map(folder => {
            return (
                <NavLink exact to={`${folder.id}`} key={folder.id} 
                activeClassName = "active"><Folder key={folder.id} id={folder.id}  name={folder.name}  /></NavLink>
                );
        })
       
        return (
         <main className='App'>
          <div className="maincontent">
                <div className="sidebar">
                    {foldersList}
                    <Link to="/add-folder">
                     <button className="addFolderButton">Add Folder</button>
                    </Link>
                </div>
                <div className="notepane">
                    {notesList}
                    <Link to="/add-note">
                        <button className="addNoteButton">Add Note</button>
                    </Link>
                </div>
            </div>
         </main>
        );
    }
    
}

export default Notepane;