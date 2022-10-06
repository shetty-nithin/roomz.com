import { createContext, useReducer } from "react";


const DEFAULT_STATE = {
    type: undefined, 
    city: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined
    }
};

const SearchReducer = (state, action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return DEFAULT_STATE;
        default:
            return state;
    }
};

export const SearchContext = createContext(DEFAULT_STATE);

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, DEFAULT_STATE);

    return (
        <SearchContext.Provider value={{type: state.propertyType, city: state.city, dates: state.dates, options: state.options, dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}