import React, { createContext, useState } from "react";

type ContactProviderInterface = {children: React.ReactNode}

type ContactContextType = {
    toContact: boolean,
    setToContactState: (toContact: boolean) => void 
}

export const ContactContext = createContext<ContactContextType>({} as ContactContextType)

const ContactProvider:React.FC <ContactProviderInterface> = ({children}) => {
    const [toContact, setToContact] = useState(false)
    const setToContactState = (newValue: boolean) => {
        setToContact(newValue)
    }
    return(
        <ContactContext.Provider value={{toContact, setToContactState}}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider