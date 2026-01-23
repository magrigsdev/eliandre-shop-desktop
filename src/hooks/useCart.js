// hooks/useCart.js
import { useState, useCallback } from 'react';

const CART_STORAGE_KEY = 'shopping_cart';


/**
 * 🪝 Hook personnalisé pour gérer le panier
 * @returns {{cartproduits: any[]|*[], cartCount: number|*, cartTotal: number|*, isEmpty, addToCart: (function(*): void)|*, removeFromCart: (function(*): void)|*, decrementQuantity: (function(*): void)|*, clearCart: (function(): void)|*, isInCart: (function(*): (boolean|boolean))|*, getProductQuantity: (function(*): number)|*, testFunction: (function(): void)|*}}
 */
const useCart = () => {
    // ✅ Initialisation du cartproduits
     const [cartproduits, setCartproduits] = useState([])

    /**
     * ✅ Validé le produit
     * @type {(function(*): (boolean))|*}
     */
    const isValidProduct = useCallback((produit) => {
        //si le produit existe ou est de type Object
        if (!produit || typeof produit !== 'object') {
            //on renvoie une erreur
            console.error("[useCart] ❌ Le produit n'est pas de type Object " , produit);
            return false;
        }
        //le produit doit avoir un _id
        if (!produit._id) {
            console.error('[useCart] ❌ Le produit doit avoir un _id', produit);
            return false;
        }


        return true;
    }, []);

    /**
     * ✅ Ajoute un produit au panier
     * @type {(function(*): void)|*}
     */
    const addToCart = useCallback((produit) => {
        //verification, avant d'ajouter
        if (!isValidProduct(produit)) {
            console.warn('[useCart] ⚠️ Produit invalide, ajout annulé');
            return;
        }
        //la fonction SetCartproduits ajoute un nouveau article
        setCartproduits(prevproduits => {
            //on verifie si le panier existais
            if (!Array.isArray(prevproduits)) {
                console.warn('[useCart] ⚠️ Panier est vide');
                return [{ ...produit, quantity: 1 }];
            }

            // le panier existais déjà
            const existingIndex = prevproduits.findIndex(p => p._id === produit._id);

            if (existingIndex !== -1) {
                // on parcour l'ancien panier
                const updated = prevproduits.map((product, index) => {
                    //on trouve si le produit etait dans le panier
                    if (index === existingIndex) {
                        //on increment la quantité
                        return {
                            ...product,
                            quantity: (product.quantity || 0) + 1
                        };
                    }
                    return product;
                });

                console.log(`[useCart] ✅ Quantité +1 pour "${produit.libelle}"`);
                return updated;
            }

            // Nouveau produit
            console.log(`[useCart] ✅ Ajout de "${produit.libelle}"`);
            return [...prevproduits, { ...produit, quantity: 1 }];
        });
    }, [isValidProduct]);

    /**
     * ✅ Retirer un produit
     * @type {(function(*): void)|*}
     */
    const removeFromCart = useCallback((productId) => {

        //on verifie si le _ID a été passé au paramètre ou le produit est definie
        if (!productId) {
            console.error('[useCart] ❌ ID manquant');
            return;
        }

        //suppression du produit
        setCartproduits(prevproduits => {
            //on verifie si le panier existe
            if (!Array.isArray(prevproduits)) return [];

            //cette fonction retourne le panier sans le produit qui a ce ID : productId
            const filtered = prevproduits.filter(produit => produit._id !== productId);
            console.log(`[useCart] ❌ Produit retiré: ${productId}`); //message

            //retourne le panier
            return filtered;
        });
    }, []);


    /**
     * ✅ Ce code gère la décrémentation (diminution) de la quantité d'un produit dans le panier
     * @type {(function(*): void)|*}
     */
    const decrementQuantity = useCallback((productId) => {
        // Sécurité : Si l'état précédent n'est pas un tableau, on repart sur un panier vide
        if (!productId) {
            console.error('[useCart] ❌ ID manquant');
            return;
        }

        setCartproduits(prevproduits => {
            //on verifie si le panier est valide ou existe
            if (!Array.isArray(prevproduits)) return [];
            // On parcourt le panier pour construire la nouvelle liste mise à jour
            return prevproduits.reduce((acc, produit) => {
                // Cas où l'on trouve le produit cible à modifier
                if (produit._id === productId) {

                    // Si plus de 1 : on ajoute le produit avec une quantité décrémentée
                    const currentQuantity = produit.quantity || 1;

                    //Si la quantité est supérieure à 1, il enlève 1.
                    if (currentQuantity > 1) {
                        acc.push({
                            ...produit,
                            quantity: currentQuantity - 1
                        });
                        console.log(`[useCart] ➖ Quantité -1 pour ${productId}`);
                    } else {
                        // Si quantité = 1 : on ne l'ajoute pas à 'acc', ce qui revient à le supprimer
                        console.log(`[useCart] ❌ Produit retiré: ${productId}`);
                    }
                } else {
                    // Pour tous les autres produits : on les conserve tels quels dans le panier
                    acc.push(produit);
                }
                // On retourne l'accumulateur mis à jour à chaque itération
                return acc;
            }, []);
        });
    }, []);

    /**
     * ✅ Vide intégralement le panier.
     * On utilise useCallback pour éviter les re-rendus inutiles des composants dépendants.
     * @type {(function(): void)|*}
     */
    const clearCart = useCallback(() => {
        // 1. Mise à jour de l'interface utilisateur (UI) : on vide l'état local.
        setCartproduits([]);
        console.log('[useCart] 🗑️ Panier vidé');
        // Dépendances vides []: la fonction est créée une seule fois au montage.
    }, []);

    /**
     * ✅Calcule le montant total cumulé du panier.
     * Retourne la somme de (prix * quantité) pour chaque article.
     */
    const getCartTotal = useCallback(() => {
        // 1. Sécurité : Si le panier n'est pas une liste valide, le total est de 0.
        if (!Array.isArray(cartproduits)) return 0;
        // 2. Calcul itératif du montant global
        return cartproduits.reduce((total, produit) => {
            // Extraction sécurisée des données avec valeurs par défaut (fallback)
            const price = produit.prix || 0;
            const quantity = produit.quantity || 0;
            // Accumulation dans le montant total
            return total + (price * quantity);
        }, 0);// 0 est le point de départ du calcul (total initial)
        // Ne se recalcule que si le contenu du panier est modifié.
    }, [cartproduits]);

    /**
     * ✅Calcule le nombre total d'articles dans le panier.
     * @type {(function(): (number|*))|*}
     */
    const getCartproduitsCount = useCallback(() => {
        // 1. Sécurité : Si le panier n'est pas un tableau, on retourne zéro.
        if (!Array.isArray(cartproduits)) return 0;
        // 2. Accumulation des quantités
        return cartproduits.reduce((count, produit) => {
            // On ajoute la quantité du produit actuel au total cumulé (count).
            // Si la quantité n'est pas définie, on ajoute 0 pour éviter les erreurs
            return count + (produit.quantity || 0);
        }, 0);// Le compteur commence à 0.
        // Recalculé uniquement lorsque le panier change.
    }, [cartproduits]);


    /**
     * ✅ Vérifie si un produit spécifique est déjà présent dans le panier.
     * @param {string|number} productId - L'identifiant unique du produit à chercher.
     * @returns {boolean} - True si le produit est présent, sinon False.
     */
    const isInCart = useCallback((productId) => {
        // 1. Sécurité : Si le panier n'est pas un tableau valide, on considère qu'il est vide.
        if (!Array.isArray(cartproduits)) return false;
        // 2. Recherche d'existence :
        // .some() renvoie true dès qu'un élément du tableau respecte la condition.
        return cartproduits.some(produit => produit._id === productId);
        // La fonction est mise à jour uniquement si le contenu du panier change.
    }, [cartproduits]);


    /**
     * ✅ Récupère la quantité déjà présente au panier pour un produit donné.
     * @param {string|number} productId - L'identifiant unique du produit.
     * @returns {number} - La quantité actuelle ou 0 si le produit n'est pas dans le panier.
     */
    const getProductQuantity = useCallback((productId) => {
        // 1. Sécurité : On s'assure que la source de données est bien un tableau.
        if (!Array.isArray(cartproduits)) return 0;
        // 2. Recherche de l'article :
        // On cherche l'objet produit complet correspondant à l'ID fourni.
        const product = cartproduits.find(produit => produit._id === productId);

        // 3. Retour de la valeur :
        // Si le produit est trouvé, on retourne sa quantité (avec 0 par défaut).
        // Sinon, on retourne 0.
        return product ? (product.quantity || 0) : 0;
        // Mise à jour de la fonction seulement si le panier est modifié.
    }, [cartproduits]);

    /**
     * Debug
     */
        //************************************** A SUPPRIMERR
    const testFunction = useCallback(() => {
        console.log('═══════════════════════════════════');
        console.log('🛒 ÉTAT DU PANIER');
        console.log('═══════════════════════════════════');
        console.log('📦 Produits différents:', cartproduits?.length || 0);
        console.log('📊 Total articles:', getCartproduitsCount());
        console.log('💰 Total:', getCartTotal().toFixed(2), '€');
        console.log('───────────────────────────────────');

        if (Array.isArray(cartproduits) && cartproduits.length > 0) {
            console.log('📋 CONTENU:');
            cartproduits.forEach((produit, index) => {
                console.log(`  ${index + 1}. ${produit.libelle || 'Sans nom'}`);
                console.log(`     • Qté: ${produit.quantity || 0}`);
                console.log(`     • Prix: ${produit.prix || 0}€`);
                console.log(`     • Sous-total: ${((produit.prix || 0) * (produit.quantity || 0)).toFixed(2)}€`);
            });
        } else {
            console.log('📋 Panier vide');
        }

        console.log('═══════════════════════════════════');
    }, [cartproduits, getCartproduitsCount, getCartTotal]);

//************************************** A SUPPRIMERR


    return {
        // État
        cartproduits: Array.isArray(cartproduits) ? cartproduits : [],
        cartCount: getCartproduitsCount(),
        cartTotal: getCartTotal(),

        isEmpty: !Array.isArray(cartproduits) || cartproduits.length === 0,//retourne empty si la taille du produit est 0

        // Actions
        addToCart,
        removeFromCart,
        decrementQuantity,
        clearCart,

        // Utilitaires
        isInCart,
        getProductQuantity,
        testFunction
    };
};

export default useCart;