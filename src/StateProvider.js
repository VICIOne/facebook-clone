import React, {createContext, useReducer, useContext} from 'react'

export const StateContext = createContext() 

export function StateProvider({children, initialValue, reducer}) {

    return (
        <StateContext.Provider value={useReducer(reducer, initialValue)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)
