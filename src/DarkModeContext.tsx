import React, { Children, FC, createContext, useState, useEffect  } from "react";

type DarkModeProviderInterface = {children: React.ReactNode}

type DarkModeContextType = {
    isActive: boolean,
    setActiveState: (isActive: boolean) => void 
}

export const DarkModeContext = createContext<DarkModeContextType>({} as DarkModeContextType)

const DarkModeProvider:React.FC <DarkModeProviderInterface> = ({children}) =>{
    const [isActive, setActive] = useState(false);
    useEffect(()=>{
        setActive(localStorage.getItem('theme') === 'true')
    }, [])
    const setActiveState = (newValue: boolean) => {
        localStorage.setItem('theme', JSON.stringify(newValue))
        setActive(newValue)
    }
    return(
        <DarkModeContext.Provider value={{isActive, setActiveState}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider