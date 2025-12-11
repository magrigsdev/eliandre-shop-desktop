
//check if onglet is actived
export const isActived = (onglet, target) => {  
    return onglet === target ? 'active': ''
}
//handle route
export const handleRoute = (e, path, route) => {
    e.preventDefault() // stop load page
    route(path)        
}
//display if not welcome page
export const DisplayIfNotWelcome = (path, Component) => {

    // return path !== '/' ? Component : null
    //connexion et welcome on affiche rien 
    switch (path) {
        case '/':
            return null
        case '/connexion':
            return null
        case '/inscription':
            return null    
    
        default:
            return Component
    }
    
}



