import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption'
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search } from '@mui/icons-material';
import { Button } from '@mui/material';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitter_icon" />

            <SidebarOption active text="Home" Icon={Home} />
            <SidebarOption text="Explore" Icon={Search}/>
            <SidebarOption text="Notification" Icon={NotificationsNone} />
            <SidebarOption text="Messages" Icon={MailOutline}/>
            <SidebarOption text="Bookmarks" Icon={BookmarkBorder}/>
            <SidebarOption text="Lists" Icon={ListAlt} />
            <SidebarOption text="Profile" Icon={PermIdentity} />
            <SidebarOption text="More" Icon={MoreHoriz} />
            
            <Button 
                variant="outlined"
                className="sidebar__tweet"
                fullWidth
            >
                Tweet
            </Button>

        </div>
    );
}

export default Sidebar;