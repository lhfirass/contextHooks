import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: false,
        light: {syntax: "#555", ui: "#ddd", bg: "#eee"},
        dark: {syntax: "#ddd", ui: "#333", bg: "#555"}
    } 
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;

/*
    ? like i understand from this method of code: its a new method of elements declaration where i can
    ? bring additional constant data to exicted elements, like we did here in our exemple
    ? we just bring our stat to the elements book list and navbar
*/