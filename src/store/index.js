import React, { useReducer, createContext } from 'react'
import reducer from '../reducers/index'
const initialState = {
    user_data: []
}
export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
})
const StoreProvider = ({ children }) => {
    const [globalState, setGlobalState] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{ globalState, setGlobalState }}>
            {children}
        </Store.Provider>
    )
}
export default StoreProvider