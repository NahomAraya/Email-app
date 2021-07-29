import React from 'react';
import './Mail.css';
import {  IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import ForwardIcon from '@material-ui/icons/Forward';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';


function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton>
                        <ArrowBackIcon onClick={() => history.push("/")}/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <ForwardIcon/>
                    </IconButton>
                                      

                </div>
                <div className="mail_toolsRight">
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="mail_body">
                <div className="mail_bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail_important"/>
                    <p>{" "}</p>
                    <p>{selectedMail?.title}</p>
                    <p className="mail_time">{selectedMail?.time}</p>
                </div>
                <div className="mail_bodyMessage">
                    <p>{selectedMail?.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail;
