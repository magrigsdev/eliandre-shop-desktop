// pages/Category.jsx
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import useCart from '../hooks/useCart';
import { Texts } from '../Constants/texts';
import Body from '../components/Body';
import CategoryBanner from '../components/category/CategoryBanner';
import CategoryList from '../components/category/CategoryList';
import { Boutton } from '../components/Boutton';

const Category = () => {

    const [sacs, setSacs] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { send } = useFetch();
    const { addToCart, testFunction, cartCount } = useCart();

    /**
     * ✅ Fetch avec useCallback pour stabiliser la référence
     */
    const fetchSacs = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await send({
                url: Texts.URLS.GET_SACS,
                method: 'GET',
            });

            setSacs(data || []);
            console.log(`[Category] ✅ ${data?.length || 0} produits chargés`);
        } catch (err) {
            console.error('[Category] ❌ Erreur:', err);
            setError('Impossible de charger les produits');
        } finally {
            setIsLoading(false);
        }
    }, []); // ✅ send doit être stable (provenant de useFetch)

    /**
     * ✅ useEffect avec tableau de dépendances vide
     */
    useEffect(() => {
        fetchSacs();
    }, [fetchSacs]); // ✅ fetchSacs est stable grâce à useCallback

    /**
     * ✅ Filtrage mémorisé
     */
    const produitsFiltres = useMemo(() => {
        if (!searchValue?.trim()) {
            return sacs;
        }

        const searchLower = searchValue.toLowerCase().trim();
        return sacs.filter(sac =>
            sac.libelle?.toLowerCase().includes(searchLower) ||
            sac.description?.toLowerCase().includes(searchLower)
        );
    }, [sacs, searchValue]);

    /**
     * ✅ Handler stable
     */
    const handleAddToCart = useCallback((produit) => {
        console.log('[Category] 🛒 Ajout:', produit.libelle);
        addToCart(produit);
    }, [addToCart]);

    // Loading
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">
                    ⏳ Chargement...
                </div>
            </div>
        );
    }

    // Error
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <p className="text-xl text-red-600 mb-4">{error}</p>
                    <Boutton onClick={fetchSacs} value="🔄 Réessayer" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center bg-gray-50 min-h-screen">
            <div className="w-full max-w-7xl px-4 py-8">
                <Body
                    Banner={
                        <CategoryBanner
                            count={produitsFiltres.length}
                            totalCount={sacs.length}
                            cartCount={cartCount}
                            searchValue={searchValue}
                            onSearchChange={setSearchValue}
                        />
                    }

                    Bloc1={
                        produitsFiltres.length > 0 ? (
                            <CategoryList
                                produits={produitsFiltres}
                                onAdd={handleAddToCart}
                            />
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                {searchValue
                                    ? `Aucun produit pour "${searchValue}"`
                                    : 'Aucun produit disponible'
                                }
                            </div>
                        )
                    }

                    Bloc2={
                        <div className="mt-4">
                            <Boutton
                                onClick={testFunction}
                                value={`🛒 Debug Panier (${cartCount})`}
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default Category;