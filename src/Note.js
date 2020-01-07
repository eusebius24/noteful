import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import PropTypes from 'prop-types';
import { createBrowserHistory } from "history";

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
      })
      .catch(error => {
        console.error(error)
      })
     
  }
 
    render() {
      const dirtyDate = new Date(this.props.modified);
      const date = dirtyDate.toLocaleString();
      const history = createBrowserHistory();
      if (!this.props.id) { history.push('/') } else {
      return (
        <NotefulContext.Consumer>

        {(context) => (
          <div className="note">
            
            <Link to={`/notes/${this.props.id}`} key={this.props.id} name={this.props.name} modified={this.props.modified} content={this.props.content}>
              <h2>{this.props.name}</h2> 
            </Link>
            <div className="notefooter">
              <p>Date modified: {date}</p>
              <button onClick={() => {this.deleteNoteRequest(this.props.id, context.deleteNote)}}>Delete note</button>
             </div>
            </div>
        )}
        </NotefulContext.Consumer>
      );
    }}
    
}

export default Note;

Note.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  modified: PropTypes.string
}