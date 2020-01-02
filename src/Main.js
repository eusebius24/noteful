import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Notepane from './Notepane';
import FolderView from './FolderView';
import SingleNote from './SingleNote';
import AddFolder from './AddFolder';



function Main(props) {
    return (
      <Router>
        <Switch>
          <Route exact path = '/'
            component={Notepane} />
          <Route exact path = "/:folderid"
            component={FolderView} />
          <Route path="/notes/:noteid" 
            component={SingleNote}/>} />
          <Route path="/add-folder" 
            component={AddFolder} />
        </Switch>
        </Router>
    );
}

export default Main;
