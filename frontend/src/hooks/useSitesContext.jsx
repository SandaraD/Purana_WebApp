import { SitesContext } from "../context/SiteContext";
import { useContext } from "react";

export const useSitesContext = () => {
    const context = useContext(SitesContext)

    if(!context) {
        throw Error('useSitesContext must be used inside a SitesContextProvider')
    }


    return context
}