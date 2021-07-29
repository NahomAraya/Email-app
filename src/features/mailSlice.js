import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  selectedMail: null,
  sendMessageisOpen: false,
  
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {

    selectMail: (state, actions) => {
      state.selectedMail = actions.payload;
    },
    openSendMessage: (state) => {
    
      state.sendMessageisOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageisOpen = false;
    },
    
   
  },
 

});

export const {  selectMail, openSendMessage, closeSendMessage  } = mailSlice.actions;


export const selectSendMessageisOpen = (state) => state.mail.sendMessageisOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;


export default mailSlice.reducer;
