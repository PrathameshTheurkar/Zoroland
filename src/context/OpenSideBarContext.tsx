'use client'
import { createContext, useState } from "react"

export interface OpenSideBarContextType {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

export const OpenSideBarContext = createContext<OpenSideBarContextType | null>(null)

const OpenSideBar = ({children}: {
    children: React.ReactNode
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <OpenSideBarContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </OpenSideBarContext.Provider>
    )
}

export default OpenSideBar