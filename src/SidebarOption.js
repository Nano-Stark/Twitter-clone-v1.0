import React from 'react';
import './SidebarOption.css';
import Home from '@mui/icons-material/Home';


const SidebarOption = ({ text, Icon, active }) => {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon />
            <h2>{text}</h2>

        </div>
    );
}

export default SidebarOption;