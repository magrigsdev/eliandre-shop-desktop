/**
 * * 📝 Constantes de texte et configuration de l'application.
 *  * Centralise tous les messages UI et les endpoints API pour faciliter la maintenance.
 * @type {{BRAND: string, WELCOME: string, USER_ALREADY_EXISTS: string, SERVER_NOT_FOUND: string, ERREUR_SERVER_NOT_FOUND: string, URLS: {GET_SACS: string, TEST_DB: string}, ERREUR_DB: string}}
 */
export const Texts = {
    // Identité de la marque
    BRAND: 'eliandre shop',
    WELCOME: 'Hello ! welcome to Eliandre shop',
    // Messages d'erreur Authentification
    USER_ALREADY_EXISTS:'Cet email est déjà utilisé',
    // Messages d'erreur Serveur / Réseau
    SERVER_NOT_FOUND:'Server non disponible.',
    ERREUR_SERVER_NOT_FOUND:'Server non disponible.',
    ERREUR_DB: "Erreur lors d'obtention des données",
    ERR_NETWORK:"Erreur de reseaux ou adresse Ip incorrect",
    /**
     * 🌐 Configuration des URLs API
     */
    URLS:{
        GET_SACS: 'http://172.20.10.2:3000/api/sacs/',
        TEST_DB: 'http://172.20.10.2:3000/users/db',
        USERS_LOGIN: 'http://172.20.10.2:3000/users/login',
    },
    SEARCH_DESCRIPTIONS: 'Recherchez un produit ...',

}