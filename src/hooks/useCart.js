// hooks/useCart.js
import { useState, useCallback, useEffect, useRef } from 'react';

const CART_STORAGE_KEY = 'shopping_cart';

/**
 * Hook personnalisé pour gérer le panier avec localStorage
 */
const useCart = () => {
    // ✅ Initialisation depuis localStorage UNE SEULE FOIS
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);
            if (savedCart) {
                const parsed = JSON.parse(savedCart);
                console.log('[useCart] 📦 Panier chargé depuis localStorage:', parsed.length, 'produits');
                return Array.isArray(parsed) ? parsed : [];
            }
        } catch (error) {
            console.error('[useCart] ❌ Erreur chargement panier:', error);
        }
        return [];
    });

    // ✅ Ref pour éviter la sauvegarde au premier render
    const isFirstRender = useRef(true);

    // ✅ Sauvegarder dans localStorage SEULEMENT après le premier render
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return; // Ne pas sauvegarder au premier render
        }

        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
            console.log('[useCart] 💾 Panier sauvegardé');
        } catch (error) {
            console.error('[useCart] ❌ Erreur sauvegarde panier:', error);
        }
    }, [cartItems]); // ✅ Se déclenche UNIQUEMENT quand cartItems change

    /**
     * Valide un produit
     */
    const isValidProduct = useCallback((item) => {
        if (!item || typeof item !== 'object') {
            console.error('[useCart] ❌ Le produit doit être un objet', item);
            return false;
        }

        if (!item._id) {
            console.error('[useCart] ❌ Le produit doit avoir un _id', item);
            return false;
        }

        if (typeof item.prix !== 'number' || item.prix < 0) {
            console.error('[useCart] ❌ Prix invalide', item);
            return false;
        }

        return true;
    }, []);

    /**
     * Ajoute un produit au panier
     */
    const addToCart = useCallback((item) => {
        if (!isValidProduct(item)) {
            console.warn('[useCart] ⚠️ Produit invalide, ajout annulé');
            return;
        }

        setCartItems(prevItems => {
            if (!Array.isArray(prevItems)) {
                console.warn('[useCart] ⚠️ Panier corrompu, réinitialisation');
                return [{ ...item, quantity: 1 }];
            }

            const existingIndex = prevItems.findIndex(p => p._id === item._id);

            if (existingIndex !== -1) {
                // Produit existant
                const updated = prevItems.map((product, index) => {
                    if (index === existingIndex) {
                        return {
                            ...product,
                            quantity: (product.quantity || 0) + 1
                        };
                    }
                    return product;
                });

                console.log(`[useCart] ✅ Quantité +1 pour "${item.libelle}"`);
                return updated;
            }

            // Nouveau produit
            console.log(`[useCart] ✅ Ajout de "${item.libelle}"`);
            return [...prevItems, { ...item, quantity: 1 }];
        });
    }, [isValidProduct]);

    /**
     * Retire un produit
     */
    const removeFromCart = useCallback((productId) => {
        if (!productId) {
            console.error('[useCart] ❌ ID manquant');
            return;
        }

        setCartItems(prevItems => {
            if (!Array.isArray(prevItems)) return [];

            const filtered = prevItems.filter(item => item._id !== productId);
            console.log(`[useCart] ❌ Produit retiré: ${productId}`);
            return filtered;
        });
    }, []);

    /**
     * Décrémente la quantité
     */
    const decrementQuantity = useCallback((productId) => {
        if (!productId) {
            console.error('[useCart] ❌ ID manquant');
            return;
        }

        setCartItems(prevItems => {
            if (!Array.isArray(prevItems)) return [];

            return prevItems.reduce((acc, item) => {
                if (item._id === productId) {
                    const currentQuantity = item.quantity || 1;

                    if (currentQuantity > 1) {
                        acc.push({
                            ...item,
                            quantity: currentQuantity - 1
                        });
                        console.log(`[useCart] ➖ Quantité -1 pour ${productId}`);
                    } else {
                        console.log(`[useCart] ❌ Produit retiré: ${productId}`);
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, []);
        });
    }, []);

    /**
     * Vide le panier
     */
    const clearCart = useCallback(() => {
        setCartItems([]);
        localStorage.removeItem(CART_STORAGE_KEY);
        console.log('[useCart] 🗑️ Panier vidé');
    }, []);

    /**
     * Calcule le total
     */
    const getCartTotal = useCallback(() => {
        if (!Array.isArray(cartItems)) return 0;

        return cartItems.reduce((total, item) => {
            const price = item.prix || 0;
            const quantity = item.quantity || 0;
            return total + (price * quantity);
        }, 0);
    }, [cartItems]);

    /**
     * Compte les articles
     */
    const getCartItemsCount = useCallback(() => {
        if (!Array.isArray(cartItems)) return 0;

        return cartItems.reduce((count, item) => {
            return count + (item.quantity || 0);
        }, 0);
    }, [cartItems]);

    /**
     * Vérifie si produit est dans le panier
     */
    const isInCart = useCallback((productId) => {
        if (!Array.isArray(cartItems)) return false;
        return cartItems.some(item => item._id === productId);
    }, [cartItems]);

    /**
     * Obtient la quantité d'un produit
     */
    const getProductQuantity = useCallback((productId) => {
        if (!Array.isArray(cartItems)) return 0;
        const product = cartItems.find(item => item._id === productId);
        return product ? (product.quantity || 0) : 0;
    }, [cartItems]);

    /**
     * Debug
     */
    const testFunction = useCallback(() => {
        console.log('═══════════════════════════════════');
        console.log('🛒 ÉTAT DU PANIER');
        console.log('═══════════════════════════════════');
        console.log('📦 Produits différents:', cartItems?.length || 0);
        console.log('📊 Total articles:', getCartItemsCount());
        console.log('💰 Total:', getCartTotal().toFixed(2), '€');
        console.log('───────────────────────────────────');

        if (Array.isArray(cartItems) && cartItems.length > 0) {
            console.log('📋 CONTENU:');
            cartItems.forEach((item, index) => {
                console.log(`  ${index + 1}. ${item.libelle || 'Sans nom'}`);
                console.log(`     • Qté: ${item.quantity || 0}`);
                console.log(`     • Prix: ${item.prix || 0}€`);
                console.log(`     • Sous-total: ${((item.prix || 0) * (item.quantity || 0)).toFixed(2)}€`);
            });
        } else {
            console.log('📋 Panier vide');
        }

        console.log('═══════════════════════════════════');
    }, [cartItems, getCartItemsCount, getCartTotal]);

    return {
        // État
        cartItems: Array.isArray(cartItems) ? cartItems : [],
        cartCount: getCartItemsCount(),
        cartTotal: getCartTotal(),
        isEmpty: !Array.isArray(cartItems) || cartItems.length === 0,

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