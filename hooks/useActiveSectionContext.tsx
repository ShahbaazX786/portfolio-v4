import { ActiveSectionContext } from '@/components/shared/activeSectionContextProvider'
import { useContext } from 'react'

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext); 

    if(context === null){
        // this is just a failsafe hook to ensure that we don't get an error upon using the context provider in layout.tsx file. 
        // Also this error should be only visible when dev tried to use the context provider outside of layout.tsx scope. ie., outside of body element/layout.tsx file.
        throw new Error('useActiveSectionContext must be used within an active section context provider');
    }
    return context;
};