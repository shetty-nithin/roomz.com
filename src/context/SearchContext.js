import { createContext, useReducer } from "react";

const DEFAULT_STATE = {
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined
    }
};

export const SearchContext = createContext(DEFAULT_STATE);

const SearchReducer = (state, action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return DEFAULT_STATE
        default:
            return state
    }
};

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, DEFAULT_STATE);

    return (
        <SearchContext.Provider value={{city: state.city, dates: state.dates, options: state.options, dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}