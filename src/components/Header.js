import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebase';



function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout(
            ))
        })
       
    };

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://www.pngitem.com/pimgs/m/75-758641_logo-gmail-png-for-gmail-email-client-mac.png" alt=""/>
            </div>
            <div className="header_middle">
                <SearchIcon/>
                <input placeholder="Search" type="text"/>
                <ArrowDropDownIcon className="header_arrow"/>
               
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                <NotificationsIcon/>
                </IconButton>
                <IconButton>
                <Avatar onClick={signOut} src={user?.photoURL} />
                </IconButton>
               
                
                

               
            </div>

            
        </div>
    )
}

export default Header;
