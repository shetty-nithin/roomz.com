import { createContext, useReducer } from "react";


const DEFAULT_SIGNUP_STATE = {
    loading: false,
    error: null
};

const SignupReducer = (state, action) => {
    switch(action.type){
        case "SIGNUP_START":
            return {
                loading: true,
                error: null
            }
        case "SIGNUP_SUCCESS":
            return {
                loading: false,
                error: null
            }
        case "SIGNUP_FAILURE":
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};

export const SignupContext = createContext(DEFAULT_SIGNUP_STATE);

export const SignupContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SignupReducer, DEFAULT_SIGNUP_STATE);

    return (
        <SignupContext.Provider value={{loading: state.loading, error: state.error, dispatch}}>
            {children}
        </SignupContext.Provider>
    )
}