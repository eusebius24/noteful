import React from 'react';
import NotefulContext from './NotefulContext';
import {createBrowserHistory} from 'history';
function Note(props) {
    
  function deleteNoteRequest(noteID, callback) {
    const notesURL = 'http://localhost:9090/notes';
    const history = createBrowserHistory();
    fetch(notesURL + `/${noteID}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data =>{
        callback(noteID)
      })
      .catch(error => {
        console.error(error)
      })
      history.goBack();
  }
    return(
        <NotefulContext.Consumer>
        {(context) => (
          <div className="note">
        <h2>{props.name}</h2> 
          <div className="notefooter">
          <p>Date modified: {props.modified}</p>
          <button onClick={() => {deleteNoteRequest(props.id, context.deleteNote)}}>Delete note</button>
        </div>
         
      </div>
        )}
        
      </NotefulContext.Consumer>
    );
}

export default Note;