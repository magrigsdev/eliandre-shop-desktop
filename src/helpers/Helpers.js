
/**
 * 
 * @param  onglet : onglet
 * @param  target 
 * @returns  empty or active
 */
export const isActived = (onglet, target) => {  
    return onglet === target ? 'active': ''
}