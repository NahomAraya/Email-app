import React from 'react';
import './MailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

function EmailRow({id, title, subject, message, time}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                message, 
                time,
            })
        )
        history.push("/mail");
    };

   
    return (
        
        <div  onClick={openMail} className="mailList_row">
            <div className="mailList_rowOptions">
                <Checkbox/>
                <IconButton>
                    <FavoriteIcon/>
                </IconButton>

            </div>
            <h3 className="mailList_rowTitle">{title}</h3>

            <div className="mailList_rowSubject">
                <h4>
                    {subject}{" "}
                    <span className="mailList_rowMessage">-{message}</span>
                </h4>
            </div>

            
           <p className="mailList_rowTime">{time}</p>
            
        </div>
    );
}

export default EmailRow;
