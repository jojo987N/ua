import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { auth, getRestaurantById } from '../firebase';
import { LoadingContext } from './LoadingContext';
import { countDown } from '../components/navbar/Navbar';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

    const { setLoading } = useContext(LoadingContext)


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
             
            //let restaurant;
            if(user){

                  setCurrentUser(user) 
               
            } 

            // (async ()=>{
            // if(user){
            // restaurant = await getRestaurantById(user.uid)
            // if(restaurant){
            //     setCurrentRestaurant(restaurant)  
            // }
            // else {

                
                
            //     setCurrentUser(user)
            // }
            
            // }else{
            //     console.log("dehors")
            //    setCurrentUser(user)
            // }

            // })()



            // if(user)
            // getRestaurantById(user.uid).then(restaurant => {
                 
            //     setCurrentRestaurant(restaurant)})
            //     .then(() => setCurrentUser(user))
            //     .then(() => setLoading(false))
            // else
            // setCurrentUser(user)


        })

    }, [])

    // console.log(currentUser)

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )

}