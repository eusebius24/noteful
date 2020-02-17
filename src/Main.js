import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Notepane from './Notepane';
import FolderView from './FolderView';
import SingleNote from './SingleNote';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import ErrorBoundary from './ErrorBoundary';




function Main(props) {
    return (
        <ErrorBoundary>
            <Switch>
              <Route exact path = '/'
                component={Notepane} />
              <Route exact path="/add-note" 
                component={AddNote} />
              <Route path="/notes/:noteid" 
                component={SingleNote}/>} />
              <Route exact path="/add-folder" 
                component={AddFolder} />
              <Route exact path = "/folders/:folderid"
                component={FolderView} />
             </Switch>
        </ErrorBoundary>
        
    );
}

export default Main;
