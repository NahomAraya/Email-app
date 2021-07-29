import React from 'react';
import './SendMail.css';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase/firebase';
import firebase from 'firebase'; 

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        dispatch(closeSendMessage());
    };
   

    return (
        <div className='sendMail'>
            <div className='sendMail_header'>
                <h3>Compose New Message</h3>
                <CloseIcon className='sendMail_close' onClick={() => {dispatch(closeSendMessage())}}/>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name='to' 
                placeholder = "To"
                type="email" 
                {...register('to', {required : true})}/>
                {errors.to && <p className="sendMail_error">* Reciver field is required!</p>}

                <input 
                name='subject' 
                placeholder = "Subject"
                 type="text" 
                 { ...register('subject', {required : true})}/>
                {errors.subject && <p className="sendMail_error">* Subject field is required!</p>}

                <input 
                name='message'
                 placeholder ="Message..." 
                 type="text" 
                 className="sendMail_message" 
                 { ...register('message',{required : true})}/>
                {errors.message && <p className="sendMail_error">* Message field is required!</p>}
                
                <div className='sendMail_submit'>
                    <Button type='submit' variant='contained' color='primary' className='sendMail_button'>Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail;
