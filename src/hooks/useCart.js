import React, {useCallback, useMemo, useState} from 'react';

const UseCart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Ajouter un produit dans le panier
    const addToCart = useCallback((item)=>{
        setCartItems(prev => {
            const exist = prev.find(p => p._id === item._id);
            if (exist) {
                return prev.map(p =>
                    p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });

    }, [])

    // Supprimer un produit dans le panier
    const deleteOneFromCart = useCallback((item)=>{
        //premier ca quantité  > 1
        if(item.quantity > 0) {
            setCartItems(prev => {
                const exist = prev.find(p => p._id === item._id);
                if (exist) {
                    return prev.map(p =>
                        p._id === item._id ? { ...p, quantity: p.quantity - 1 } : p
                    );
                }
                return [...prev, { ...item, quantity: 1 }];
            });

        }

    },[])

    //total des produits dans le panier
    const totalPrice = useMemo(
        ()=>
            //(cart || [])
            //cart.reduce : init
            cartItems?.reduce((sum, p) =>
                sum + (p.quantity || 0) * (p.prix ?? p.price ?? 0), 0).toFixed(2)
        ,[cartItems])

    //Calcul le total des articles
    const totalItems = useMemo(
        ()=>cartItems?.reduce((sum, p) => sum + (p.quantity || 0), 0), [cartItems])

    //Obtenir la quantité actuelle
    const getCurrentQuantityById = useCallback((item) => {
        if (!cartItems) return 0;
        return cartItems.find(p => p._id === item._id)?.quantity || 0;
    }, [cartItems]);

    //return
    return {cartItems, addToCart,
            totalItems,deleteOneFromCart,
            totalPrice,getCurrentQuantityById
    };
};

export default UseCart;