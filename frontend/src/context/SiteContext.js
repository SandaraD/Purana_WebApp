import { createContext, useReducer } from 'react'

export const SitesContext = createContext()

export const sitesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SITES':
            return {
                sites: action.payload
            }
        case 'CREATE_SITE' :
            return {
                sites: [action.payload, ...state.sites]
            }
            default: 
            return state
    }
}

export const SitesContextProvider = ({ children })  => {

    const [state, dispatch] = useReducer(sitesReducer, {
        sites: null
    })

    

    return (
        <SitesContext.Provider value={{...state, dispatch}}>
            { children }
        </SitesContext.Provider>
    )
}