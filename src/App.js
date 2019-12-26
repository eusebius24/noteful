import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import STORE from './dummy-store';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes,
      selectedFolder: '',
      selectedNote: ''
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


  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <Main folders={this.state.folders} notes={this.state.notes} selectedFolder={this.state.selectedFolder} selectedNote={this.state.selectedNote} selectFolder={this.selectFolder} selectNote={this.selectNote} />
      </div>
    );
  }
 
     
     
     
     
        
       

     
      
   
  
}

export default App;
