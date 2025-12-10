
/**
 * 
 * @param  onglet : onglet
 * @param  target 
 * @returns  empty or active
 */
export const isActived = (onglet, target) => { 
    // switch (current) {
    //     case 'accueil':
    //         return 'active'
    //     case 'categorie':
    //         return 'active'
        
    //     default:
    //         return '';
    // }  
    
    return onglet === target ? 'active': ''
}