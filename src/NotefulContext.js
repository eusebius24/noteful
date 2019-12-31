import React from 'react';

const NotefulContext = React.createContext({
   folders : {},
   notes : {},
   selectFolder : () => {},
   deleteNote: () => {},
})

export default NotefulContext;