import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header className="mainheader">
        <Link to="/"><h1>Noteful</h1>
         </Link>
          
        </header>
    );
  
}

export default Header;