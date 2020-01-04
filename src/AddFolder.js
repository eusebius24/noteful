import React from 'react';
import NotefulContext from './NotefulContext';


const Required = () => (
    <span className='AddBookmark__required'>*</span>
  )

class AddFolder extends React.Component{
    static contextType = NotefulContext;
    state = {
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault();
        const { folderName } = e.target;
        const url = 'http://localhost:9090/folders';
        const newFolder = {
            name: folderName.value,
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newFolder),
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
            folderName.value = '';
            this.context.addFolder(data);
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({ error })
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    render() {
        const {error} = this.state
        return (
            <>
            <section className="AddFolder">
                <h2>Add a folder</h2>
                <form className="AddFolder__form" onSubmit={this.handleSubmit}>
                    <div>
                    <div className='Add__error' role='alert'>
                        {error && <p>{error.message}</p>}
                    </div>
                        <label htmlFor="folderName">New Folder Name 
                        {' '}
                        <Required />
                        </label>
                        <input type="text" name='folderName' id='folderName' placeholder='Awesome Folder' required />
                        <div className="addFolderButtonSection">
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

export default AddFolder;