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
        const note = this.context.notes.filter(note => {
            return note.id === params.noteid
        })
        console.log(note);
        if (!note[0]) { 
        return <Redirect exact to = '/' />
    } else {
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
    }}
    
}

export default SingleNote;
