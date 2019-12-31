import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Notepane from './Notepane';
import FolderViewImportant from './FolderViews/FolderViewImportant';
import FolderViewSuper from './FolderViews/FolderViewSuper';
import FolderViewSpangley from './FolderViews/FolderViewSpangley';
import SingleNote from './SingleNote';



function Main(props) {
    return (
        <Switch>
          <Route exact path = '/'
            component={Notepane}
            />
<Route path = "/FolderViews/FolderViewImportant"
  component={FolderViewImportant} />
<Route path = '/FolderViews/FolderViewSuper'
  component={FolderViewSuper} />
<Route path = '/FolderViews/FolderViewSpangley'
  component={FolderViewSpangley} />
<Route path="/notes/:noteid" component={SingleNote}/>} />


</Switch>

    );
}

export default Main;
