import React from 'react';
import MiddleSection from './components/MiddleSection/MiddleSection';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useSelector } from 'react-redux';
import{selectSendMessageIsOpen} from './features/Mail/mailSlice'
function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  return (
    <Router>

        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>

          </div>
          {sendMessageIsOpen && <SendMail/> }


        </div>
      
    </Router>
  


    
  
  );
}
export default App;
