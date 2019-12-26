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
  render={() => <Notepane folders={props.folders} notes={props.notes} selectedFolder={props.selectedFolder} selectedNote={props.selectedNote} 
  selectFolder={props.selectFolder} selectNote={props.selectNote}
  />}
  />
<Route path = '/FolderViews/FolderViewImportant'
  render={() => <FolderViewImportant folders={props.folders} notes={props.notes} selectedFolder={props.selectedFolder} selectedNote={props.selectedNote}  selectFolder={props.selectFolder} selectNote={props.selectNote} />}/>
<Route path = '/FolderViews/FolderViewSuper'
  render={() => <FolderViewSuper folders={props.folders} notes={props.notes} selectedFolder={props.selectedFolder} selectedNote={props.selectedNote}  selectFolder={props.selectFolder} selectNote={props.selectNote} />}/>
<Route path = '/FolderViews/FolderViewSpangley'
  render={() => <FolderViewSpangley folders={props.folders} notes={props.notes} selectedFolder={props.selectedFolder} selectedNote={props.selectedNote}  selectFolder={props.selectFolder} selectNote={props.selectNote} />}/>
<Route path="/notes/:noteid" component={SingleNote}/>} />
 

</Switch>

    );
}

export default Main;
