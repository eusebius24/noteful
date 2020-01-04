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
        const folderID = folderURL.substring(1);
        const { folders, notes } = this.context;
        
        const foldersList = folders.map(folder => {
        
           if (folderID === folder.id) {
            return <NavLink exact to={`${folder.id}`}  activeClassName = "active" key={folder.id}><Folder key={folder.id} id={folder.id} name={folder.name} selected={true} /></NavLink> 
           }
            else {
            return <NavLink exact to={`${folder.id}`}  activeClassName = "active" key={folder.id}><Folder key={folder.id} id={folder.id} name={folder.name}  /></NavLink> 
            }
    
          })
        
        const notesList = notes.map(note => {
            if (note.folderId === folderID) {
                return <Link to={`/notes/${note.id}`} key={note.id}><Note key={note.id}  id={note.id} name={note.name} content={note.content} folderId={note.folderId} modified={note.modified} history={this.props.history} /></Link>
            } else{return ''};
        })
        
    
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