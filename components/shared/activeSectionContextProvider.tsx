'use client';

import { ActiveSectionContextProviderProps, ActiveSectionContextType, LinkType } from '@/lib/types';
import React, { useState, createContext } from 'react'

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {

    const [activeLink, setActiveLink] = useState<LinkType>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return <ActiveSectionContext.Provider value={{ activeLink, setActiveLink, timeOfLastClick, setTimeOfLastClick }}>{children}</ActiveSectionContext.Provider>
}

export default ActiveSectionContextProvider;