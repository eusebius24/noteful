import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Notepane from './Notepane';
import FolderView from './FolderView';
import SingleNote from './SingleNote';
import AddFolder from './AddFolder';



function Main(props) {
    return (
     
        <Switch>
          <Route exact path = '/'
            component={Notepane} />
          
          <Route path="/notes/:noteid" 
            component={SingleNote}/>} />
          <Route exact path="/add-folder" 
            component={AddFolder} />
          <Route exact path = "/:folderid"
            component={FolderView} />
        </Switch>
      
    );
}

export default Main;
