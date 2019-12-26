import React from 'react';
import Note from './Note';
import STORE from './dummy-store';
import {useParams} from 'react-router-dom';
import {createBrowserHistory} from 'history';

class SingleNote extends React.Component {

   
   
    render() {
        const history = createBrowserHistory();
        
        console.log('this.props:', this.props);
        const { params } = this.props.match;
        const note = STORE.notes.filter(note => {
            return note.id === params.noteid
        })
        console.log('note:', note);
        console.log(note[0].name);
    return (
        <div className="maincontent">
            <div className="sidebar">
                <button onClick={() => history.goBack()}>Go back</button>
            </div>
            <div className="notepane">
                <Note id={params.noteid} name={note[0].name} modified={note[0].modified} />
                <p className="content">{note[0].content}</p>
            </div>
        </div>
    );
    }
    
}

export default SingleNote;