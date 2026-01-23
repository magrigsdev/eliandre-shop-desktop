/**
 * 🗺️ Configuration des routes de l'application.
 *  * L'utilisation de Object.freeze() rend cet objet immuable (impossible à modifier).
 * @type {Readonly<{HOME: string, LOGIN: string, CART: string, REGISTER: string, LOGOUT: string, CATEGORY: string}>}
 */
export const Routes = Object.freeze({
    HOME: '/',
    LOGIN: '/login',
    CART: '/cart',
    REGISTER: '/register',
    LOGOUT: '/logout',
    CATEGORY: '/category',
});