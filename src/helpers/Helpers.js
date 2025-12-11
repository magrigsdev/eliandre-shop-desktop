
/**
 * 
 * @param  onglet : onglet
 * @param  target 
 * @returns  empty or active
 */
export const isActived = (onglet, target) => {  
    return onglet === target ? 'active': ''
}
export const handleRoute = (e, path, route) => {
    e.preventDefault() // stop load page
    route(path)        
}