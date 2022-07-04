import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { auth, getRestaurantById } from '../firebase';
import { RestaurantContext } from './RestaurantContext';
import { LoadingContext } from './LoadingContext';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

    const { setCurrentRestaurant } = useContext(RestaurantContext)
    const { setLoading } = useContext(LoadingContext)


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if(user)
            getRestaurantById(user.uid).then(restaurant => setCurrentRestaurant(restaurant))
                .then(() => setCurrentUser(user))
                .then(() => setLoading(false))
            else
            setCurrentUser(user)


        })

    }, [])

    // console.log(currentUser)

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )

}