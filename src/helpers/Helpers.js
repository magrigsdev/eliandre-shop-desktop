
/**
 * 
 * @param  current 
 * @param  target 
 * @returns  empty or active
 */
export const isActived = (current) => { 
    switch (current) {
        case 'accueil':
            return 'active'
        case 'categorie':
            return 'active'
        
        default:
            return '';
    }  
    
}