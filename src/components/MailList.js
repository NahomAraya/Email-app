import { React, useState, useEffect }from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import './MailList.css';
import { db } from '../firebase/firebase';

function MailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection("emails").orderBy("timestamp", "desc").onSnapshot(
            (snapshot) => setEmails(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
            );

    }, []);
    return (
        <div className="mailList">
            <div className="mailList_settings">
                <div className="mailList_settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="mailList_settingsRight">
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
                
            </div>
            <div className="mailList_section">
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true}/> 
                <Section Icon={PeopleIcon} title='Social' color='blue'/> 
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />  
            </div>
            <div className="mailList_list">
                {emails.map(({id, data:{ to, subject, message, timestamp}}) => (
                <EmailRow
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    message={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
                ))}

            </div>
        </div>
    )
}

export default MailList;
