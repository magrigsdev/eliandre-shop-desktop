import React, {useCallback, useMemo, useState} from 'react';

const UseCart = () => {
    const [cartItems, setCartItems] = useState([]);

    //addCart
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


    //calcul le total des articles
    const totalItems = useMemo(
        ()=>cartItems?.reduce((sum, p) => sum + (p.quantity || 0), 0), [cartItems])

    //return
    return {cartItems, addToCart, totalItems};
};

export default UseCart;