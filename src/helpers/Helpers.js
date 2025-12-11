
/**
 * 
 * @param  onglet : onglet
 * @param  target 
 * @returns  empty or active
 */
//check if onglet is actived
export const isActived = (onglet, target) => {  
    return onglet === target ? 'active': ''
}
//handle route
export const handleRoute = (e, path, route) => {
    e.preventDefault() // stop load page
    route(path)        
}