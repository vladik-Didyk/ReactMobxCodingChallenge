import React from 'react';

import {CurrentUserStoreImpl} from "../stores/CurrentUser.store";
import {observer} from "mobx-react";

interface EditUserProps {
    currentUserStore: CurrentUserStoreImpl
}

const EditUser: React.FC<EditUserProps> = observer(({currentUserStore}) => {
    return <div>
        <input type="string" name='name' onChange={(event) => currentUserStore.updateCurrentUserName(event.target.value)}/>
        <input type="number" name='age' onChange={(event) => currentUserStore.updateCurrentUserAge(event.target.valueAsNumber)}/>
    </div>
});


export default EditUser
