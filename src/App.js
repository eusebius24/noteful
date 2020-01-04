import React from 'react';
import {Redirect} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import NotefulContext from './NotefulContext';
import {createBrowserHistory} from 'history';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      folders: [],
      notes: [],
      selectedFolder: '',
      selectedNote: '',
      error: null,
      toHomePage: false,
    }
    this.selectFolder = this.selectFolder.bind(this);
    this.selectNote = this.selectNote.bind(this);
  }
  
  selectFolder(e) {
    this.setState({
      selectedFolder: this.folders.name
    })
    console.log(this.state.selectedFolder);
    }
  
  selectNote(e) {
    console.log(e.target);
  }

  deleteNote = noteID => {
    const history = createBrowserHistory();
   
    const newNotes = this.state.notes.filter(note => 
        note.id !== noteID
    )
  
    this.setState({
      notes: newNotes,
    });
   
    history.push('/');
  }

  addFolder = folder => {
    this.setState({
      folders: [ ...this.state.folders, folder ],
    })
  }

  addNote = note => {
    this.setState({
      notes: [ ...this.state.notes, note ],
    })
  }

  componentDidMount() {
    const folderURL = 'http://localhost:9090/folders';
    const notesURL = 'http://localhost:9090/notes';
    fetch(folderURL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json();
        
      })
      .then(data => {
        this.setState({
          folders: data
        })
      })
      .catch(error => this.setState({ error }))
    
      fetch(notesURL, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json();
          
        })
        .then(data => {
          this.setState({
            notes: data
          })
          return <Redirect to="/" />
        })
        .catch(error => this.setState({ error }))
  }


  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      selectFolder: this.selectFolder,
      selectNote: this.selectNote,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
    }
  
    return (
      <div>
        <NotefulContext.Provider value={contextValue}>
         
            <Header />
            <Main  />
         
        </NotefulContext.Provider>
      </div>
      
    );
  }
 
     
     
     
     
        
       

     
      
   
  
}

export default App;
