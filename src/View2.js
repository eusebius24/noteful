import React from 'react';
import {Link} from 'react-router-dom';

function View2() {
    return(
        <div className='view2'>
            <h1>It's another view!!  Yee haaaaaa</h1>
            <p><Link to = '/'>Back to homepage</Link></p>
        </div>
    );
}

export default View2;