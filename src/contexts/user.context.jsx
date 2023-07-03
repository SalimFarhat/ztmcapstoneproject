import { createContext, useState, useEffect, useReducer } from "react";

import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducers/reducer.utils";

import { userReducer, INITIAL_STATE, USER_ACTION_TYPES } from "../store/user/user.reducer";

// as the actual value I want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});



export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    const value = {currentUser, setCurrentUser};

    // signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])
    console.log(currentUser);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}