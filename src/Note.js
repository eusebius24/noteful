import React from 'react';
import NotefulContext from './NotefulContext';


class Note extends React.Component {
  

  deleteNoteRequest(noteID, callback) {
    
    const notesURL = 'http://localhost:9090/notes';
    
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
        this.props.history.push('/');
      })
      .catch(error => {
        console.error(error)
      })
     
  }
    render() {
      return(
       
        <NotefulContext.Consumer>
        {(context) => (
          <div className="note">
        <h2>{this.props.name}</h2> 
          <div className="notefooter">
          <p>Date modified: {this.props.modified}</p>
          <button onClick={() => {this.deleteNoteRequest(this.props.id, context.deleteNote)}}>Delete note</button>
        </div>
         
      </div>
        )}
        
      </NotefulContext.Consumer>
    );
    }
    
}

export default Note;