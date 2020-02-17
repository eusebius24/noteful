import React from 'react';
import Note from './Note';
import {createBrowserHistory} from 'history';
import NotefulContext from './NotefulContext';
import { Redirect } from 'react-router-dom';

class SingleNote extends React.Component {

   static contextType = NotefulContext;


    render() {
        const history = createBrowserHistory();
        
        const { params } = this.props.match;
        console.log('params:', this.props.match.params)
        console.log("this.context.notes:", this.context.notes);
        const note = this.context.notes.filter(n => {
            return n.id === parseInt(params.noteid)
        })
        console.log("note:", note);
        if (!note[0]) { 
        return <div>Loading...</div>
    } else {
        return (
            <div className="maincontent">
                <div className="sidebar">
                    <button onClick={() => history.goBack()}>Go back</button>
                </div>
                <div className="notepane">
                    <Note id={params.noteid} name={note[0].note_name} modified={note[0].date_modified} />
                    <p className="content">{note[0].content}</p>
                </div>
            </div>
        );
    }}
    
}

export default SingleNote;
