import React, {createContext, useReducer, useContext, useState} from 'react'

export const StateContext = createContext() 

export function StateProvider({children, initialValue, reducer}) {
    const [modalState, setModalState] = useState(false)
    const [modalValue, setModalValue] = useState('')

    const overallContextObj = {
        user: useReducer(reducer, initialValue),
        modalState: [modalState, setModalState],
        modalValue: [modalValue, setModalValue]
    }
    
    return (
        <StateContext.Provider value={overallContextObj}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)
