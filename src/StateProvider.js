import React, {createContext, useContext, useState, useEffect} from 'react'
import {auth} from './localfirebase'
import Loader from './components/UI/Loader/Loader'


export const StateContext = createContext() 

export function StateProvider({children}) {
    const [modalState, setModalState] = useState(false)
    const [modalValue, setModalValue] = useState('')
    const [user, setUser] = useState(null)
    const [pending, setPending] = useState(true)

    const overallContextObj = {
        user: [user, setUser],
        modalState: [modalState, setModalState],
        modalValue: [modalValue, setModalValue],
    }
    
    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            if(currentUser){
                setUser(JSON.parse(localStorage.getItem('currentUserInfo')))
                setPending(false)
                return
            }
            setUser(null)
            setPending(false)
        });
    }, []);

    if(pending){return <Loader width={'100%'} height={'100vh'}/>}

    return (
        <StateContext.Provider value={overallContextObj}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)
