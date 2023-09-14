import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import './Homepage.css';

function Homepage(props) {
    const [tabs, setTabs] = useState([{}]);
    const [tabActive,setTabActive]=useState(0);
    const [theme,setTheme]=useState("light");

    const addTabs=(e)=>{
        const newArray=[...tabs];
        newArray.push({});
        setTabs(newArray);
    }

    console.log(tabActive);
    const handleTabsChange=(e,index)=>{
        setTabActive(index);
    }

    return (
        <>
            <div className='themeCard'>
                <div>Theme:</div>
                <div className='lightTheme' onClick={()=>setTheme("light")}></div>
                <div className='darkTheme' onClick={()=>setTheme("dark")}></div>
            </div>
            <Header tabs={tabs} addTabs={addTabs} handleTabsChange={handleTabsChange} theme={theme} activeTab={tabActive}/>
            <Tab number={tabActive} theme={theme}/>
        </>
    );
}

export default Homepage;