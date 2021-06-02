import React from 'react';
import  '../App.css'

import {CurrentUserStoreImpl} from "../stores/CurrentUser.store";
import {observer} from "mobx-react";

interface EditUserProps {
    currentUserStore: CurrentUserStoreImpl
}



const EditUser: React.FC<EditUserProps> = observer(({currentUserStore}) => {

    const handlerInputName  = (event:any):void => {        
        currentUserStore.updateCurrentUserName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase())
    }

    const handlerInputAge = (event: any) : void=> {
       
        
        event.target.value =  +event.target.value  <= 0 
        ? ''
        : +event.target.value
        
        
        currentUserStore.updateCurrentUserAge(event.target.value)
    }
    
    return <div className='EditUser'>
        <div className='nameContainer Container'>
        <label>Your name</label>
        <input 
            type="string" 
            name='name' 
            onChange={handlerInputName}
            placeholder='Your name'/>
        </div>
        <div className='ageContainer Container'>
        <label>Your age</label>
        <input 
        className="inputAge"
            type="number" 
            min="0"
            name='age' 
            onChange={handlerInputAge}
            placeholder='Your age'/>
        </div>
    </div>
});


export default EditUser
