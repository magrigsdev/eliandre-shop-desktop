import React, {createContext, useCallback, useMemo, useState, useContext} from 'react';

const CartContext = createContext();

const  CartProvider = ({children}) => {

    //list des objets
    const [cart, setCart] = useState([])

    //ajoute le produit ou increment sa quantité
    const ajouteCart = useCallback((item)=>{
        setCart(prev => {
            const exist = prev.find(p => p._id === item._id);
            if (exist) {
                return prev.map(p =>
                    p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    },[])

    //enlever le produit du cart
    const deleteOneFromCart = useCallback((item)=>{
        //premier ca quantité  > 1
        if(item.quantity > 0) {
            setCart(prev => {
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

    //calcule le total des articles
    const totalItems = useMemo(
        ()=>cart?.reduce((sum, p) => sum + (p.quantity || 0), 0), [cart])

    //total des produit dans le cart
    const totalPrice = useMemo(
        ()=>
            //(cart || [])
            //cart.reduce : init
            cart?.reduce((sum, p) =>
                sum + (p.quantity || 0) * (p.prix ?? p.price ?? 0), 0).toFixed(2)
        ,[cart])

    //obtenir la quantité courant
    const getQuantityById = useCallback((item) => {
        if (!cart) return 0;
        return cart.find(p => p._id === item._id)?.quantity || 0;
    }, [cart]);

    //vider le cart
    const emptyCart = useCallback(()=>{
        if(!cart) return 0
        setCart([])
    },[])

    //logout
    const logout = useCallback(()=>{
        //
    })


    /*********** FIN */
        //on utlise memo
    const value = useMemo(
            ()=>({getQuantityById,
                totalPrice,
                totalItems,
                ajouteCart,
                cart,
                emptyCart,
                deleteOneFromCart,

                logout
            }),
            [getQuantityById, totalPrice,
                totalItems, ajouteCart,
                cart, emptyCart,
                deleteOneFromCart,

                logout
            ]
        )

    //return the context
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    const ctx = useContext(CartContext);
    if(!ctx) throw new Error('useCart() must be used within cartProvider');
    return ctx;
}