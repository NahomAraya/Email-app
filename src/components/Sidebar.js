import { React, useState, useEffect } from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import { IconButton, Avatar, Button  } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
import { db } from '../firebase/firebase';

function Sidebar() {
    const dispatch = useDispatch();
    const [numbers, setNumbers] = useState(0);
    useEffect(() => {
        db.collection("emails").get().then(function(querySnapshot) {
            setNumbers(querySnapshot.size)      
        });
    }, [])

    return (
        <div className="sidebar">
            <Button 
            startIcon={<AddIcon fontSize="large"/>}
            className="sidebar_compose"
            onClick= { () => {dispatch(openSendMessage())}}
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} 
            title="Inbox" 
            number={numbers} 
            selected={true}/>
            {/*add message reciveing fucntionality*/}
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
