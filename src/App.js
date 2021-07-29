import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import MailList from './components/MailList';
import SendMail from './components/SendMail';
import Login from './components/Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageisOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';


function App() {
  const sendMessageisOpen = useSelector(selectSendMessageisOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged( user => {
      if(user){
        dispatch(login(
          {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }
        ))
      }
    })
   
  }, [])

  return (
    <Router>
      { !user? 
      (
        <Login/>
      ): (
        <div className="app">
        <Header/>
        <div className="app_body">
          <Sidebar/>
          <Switch>
            <Route path="/mail">
              <Mail/>
            </Route>
            <Route path="/">
              <MailList/>
            </Route>
          </Switch>
        </div>
        {sendMessageisOpen && <SendMail/>}
    

    </div>
      )
    }
      
    </Router>
  );
}

export default App;
