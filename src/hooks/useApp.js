import {useContext} from "react";
import AppContext from "../context/AppContext.js";

/**
 * @return currentPage,
 * @callback  setCurrentPage
 **/
export const useApp = () =>
{
    const ctx = useContext(AppContext)
    if(ctx === null) throw new Error("useApp doit être utilisé à l'interieur de <AppProvider>")
    return ctx;
}
export default useApp;