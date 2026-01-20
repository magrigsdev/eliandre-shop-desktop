import {useContext} from "react";
import AppContext from "../context/AppContext.js";

export const useApp = () =>
{
    const ctx = useContext(AppContext)
    if(!ctx) throw new Error("useApp doit être utilisé à l'interieur de <AppProvider>")
    return ctx;
}
export default useApp;