import React from 'react';
import {CurrentUserStoreImpl} from "../stores/CurrentUser.store";
import {observer} from "mobx-react";

interface DisplayUserNameProps {
    currentUserStore: CurrentUserStoreImpl;
}

const DisplayUserName: React.FC<DisplayUserNameProps> = observer(({currentUserStore}) => {

    return <div>
        <h1>{currentUserStore.currentUser.name + currentUserStore.currentUser.age}</h1>
    </div>
})


export default DisplayUserName
