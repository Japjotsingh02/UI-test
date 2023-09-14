import React from 'react';
import './Tab.css';

function Tab({number,theme}) {
    
    return (
        <div className={theme==='dark' ? 'dark tabCard' : 'tabCard'}>
            <h1 className='heading'>Tab {number+1}</h1>
        </div>
    );
}

export default Tab;