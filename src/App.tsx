import React from 'react';
import './App.css';
import DisplayUserName from "./components/DisplayUserName.component";
import EditUser from "./components/EditUser.component";
import {CurrentUserStore} from "./stores/CurrentUser.store";

const App = () => {
  return (
    <div className='App'>
      <EditUser currentUserStore={CurrentUserStore}/>
      <DisplayUserName currentUserStore={CurrentUserStore}/>
    </div>
  );
};

export default App;
