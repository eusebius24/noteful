import React from 'react';
import NotefulContext from './NotefulContext';


const Required = () => (
    <span className='AddBookmark__required'>*</span>
  )

class AddNote extends React.Component{
    static contextType = NotefulContext;
    state = {
        error: null,
        value: 'Note content goes here'
    }

    handleSubmit = e => {
        e.preventDefault();
        const date = new Date();
        const { noteName, folderName, noteContent } = e.target;
        const url = 'https://fathomless-scrubland-44969.herokuapp.com/api/notes';
        const newNote = {
            id: '',
            note_name: noteName.value,
            date_modified: date.toLocaleString(),
            folder_id: folderName.value,
            content: noteContent.value
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newNote),
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
            return res.json();
        })
        .then(data => {
            noteName.value = '';
            folderName.value = '';
            noteContent.value = '';
            this.context.addNote(data);
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({ error });
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/');
    }

    render() {
        const {error} = this.state
        const folderSelect = this.context.folders.map (folder => {
            return (<option key = {folder.id} value={`${folder.id}`}>{folder.folder_name}</option>);
        })
        return (
            <>
                <section className="AddNote">
                    <h2>Add a note</h2>
                    <form className="AddNote__form" onSubmit={this.handleSubmit}>
                        <div>
                            <div className='Add__error' role='alert'>
                                {error && <p>{error.message}</p>}
                            </div>
                                <label htmlFor="noteName">New Note Name 
                                {' '}
                                <Required />
                                </label>
                                <input type="text" name='noteName' id='noteName' placeholder='New Note' required />
                                <label htmlFor="folderName">Add to Folder:
                                {' '}
                                <Required />
                                </label>
                                <select name='folderName' id='folderName' placeholder='New Note' required >
                                {folderSelect}
                                </select>
                                <textarea name='noteContent' id='noteContent' placeholder='Write your note here' required />
                                <div className="addNoteButtonSection">
                                <button type='button' onClick={this.handleClickCancel}>Cancel</button> 
                                <button type='submit'>Save</button>
                            </div>
                        </div>
                    </form>
                </section>
            </>
        );
    }
}

export default AddNote;