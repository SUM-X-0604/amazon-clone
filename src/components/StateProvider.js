import React, { createContext, useContext, useReducer } from 'react';

// DATA LAYER
export const StateContext = createContext();

// DATA PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//THIS IS HOW WE USE INSIDE OF A COMPONENT
export const UseStateValue = () => useContext(StateContext);


