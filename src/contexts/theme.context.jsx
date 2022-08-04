import { useReducer, createContext } from 'react';

export const ThemeContext = createContext({});

//Defining action types for the reducer
export const actiontypes = {
  LIGHTMODE: 'LIGHTMODE',
  DARKMODE: 'DARKMODE',
};

//initial state for the reducer
const initialState = { darkMode: true };

// This is a simple change of state a reducer is not neccessary but I'll use one for the practice
const themeReducer = (state, action) => {
  switch (action.type) {
    case actiontypes.LIGHTMODE:
      return { darkMode: false };
    case actiontypes.DARKMODE:
      return { darkMode: true };
    default:
        return state
  }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    return <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
}
