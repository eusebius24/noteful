import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import NotefulContext from './NotefulContext'


class Folder extends React.Component {
    constructor(props) {
        super(props);
    }

    static ContextType = NotefulContext;

   render() {
    const { folders } = this.context;
    console.log('this.props:', this.props);
        if(this.props.status) {
    return (
        <div className="folder" id={this.props.id} onClick={this.props.selectFolder} style={{background: "#95e4f4"}}>
            <h2>{this.props.name}</h2>
        </div>
        );
   } else {
    return (
        <div className="folder" id={this.props.id} onClick={this.props.selectFolder}>
            <h2>{this.props.name}</h2>
    
        </div>
        );
   }
    
   
}

}

export default Folder;

Folder.propTypes = {
    folder_name: PropTypes.string.isRequired
};