import React from 'react';
import './Header.css';

function Header({tabs,addTabs,handleTabsChange,theme,activeTab}) {
    return (
        <div className='tabFlex'>
            {
                tabs.map((data,i)=>(
                    <div className={(theme==='dark' && activeTab===i) ? 'dark tab' : (activeTab===i) ? 'tabActive tab' : 'tab'} key={i} onClick={(e)=>handleTabsChange(e,i)}>Tab {i+1}</div>
                ))
            }
            <button onClick={(e)=>addTabs(e)} className={theme==='dark' ? 'dark addBtn' : 'addBtn'}>+</button>
        </div>
    );
}

export default Header;