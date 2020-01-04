import React from 'react';

const NotefulContext = React.createContext({
   folders : {},
   notes : {},
   selectFolder : () => {},
   deleteNote: () => {},
   addFolder: () => {},
   addNote: () => {},
})

export default NotefulContext;