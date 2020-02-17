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
        console.log("NOTES:", this.context.notes);
        console.log("FOLDERS:", this.context.folders)
        // console.log(this.context.folders[0].folder_name);
        const notesList = this.context.notes.map(note => {
            return ( 
               <Note key={note.id} id={note.id} name={note.note_name} content={note.content} folderId={note.folder_id} modified={note.date_modified} history={this.props.history} />
            )
        })
        console.log("NotesList:", notesList);
        
        const foldersList = this.context.folders.map(folder => {
            return (
                <NavLink exact to={`/folders/${folder.id}`} key={folder.id} 
                activeClassName = "active"><Folder key={folder.id} id={folder.id}  name={folder.folder_name}  /></NavLink>
                );
        })
       
        return (
         <main className='App'>
          <div className="maincontent">
                <div className="sidebar">
                    {(!folders) ? "loading ..." : foldersList}
                    <Link to="/add-folder">
                     <button className="addFolderButton">Add Folder</button>
                    </Link>
                </div>
                <div className="notepane">
                    {(!notes) ? "loading..." : notesList}
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