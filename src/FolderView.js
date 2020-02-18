import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
import NotefulContext from './NotefulContext';
import './App.css';

class FolderView extends React.Component {
    static contextType = NotefulContext;
    
    render() {
       
        const folderURL = this.props.location.pathname;
        console.log("folderURL:", folderURL);
        const folderID = folderURL.substring(9);
        console.log("folderID:", folderID);
        const { folders, notes } = this.context;
        console.log("notes:", notes);

        const foldersList = folders.map(folder => {
            
           if (parseInt(folderID) === folder.id) {
            return <NavLink exact to={`/folders/${folder.id}`}  className = "selected" key={folder.id}><Folder key={folder.id} id={folder.id} name={folder.folder_name} status = "selected" selected={true} /></NavLink> 
           }
            else {
            return <NavLink exact to={`${folder.id}`}  activeClassName = "active" key={folder.id}><Folder key={folder.id} id={folder.id} name={folder.folder_name}  /></NavLink> 
            }
    
          })
          const newNotes = notes.filter(note => note.folder_id === parseInt(folderID));
          console.log("newNotes:", newNotes);
        const notesList = newNotes.map(note => {
                
                return <Note key={note.id}  id={note.id} name={note.note_name} content={note.content} folderId={note.folder_id} modified={note.date_modified} history={this.props.history} />
       
            
        });
        console.log("notesList:", notesList);
       
        return (
         <main className='App'>
          <div className="maincontent">
                <div className="sidebar">
                    {foldersList}
                    <Link to="/add-folder"><button className="addFolderButton">Add Folder</button></Link> 
                </div>
                <div className="notepane">
                    {notesList}    
                  
                    <Link to="/add-note"><button className="addNoteButton">Add Note</button></Link>
                </div>
            </div>
        
         </main>
            
        );
        
    }
    
}

export default FolderView;