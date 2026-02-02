// pages/Category.jsx
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import useCart from '../hooks/useCart';
import { Texts } from '../Constants/texts';
import Body from '../components/Body';
import CategoryBanner from '../components/category/CategoryBanner';
import CategoryList from '../components/category/CategoryList';
import { Boutton } from '../components/Boutton';
import {useForm} from "../hooks/useForm.js";



/**
 * Page de catégorie : Gère l'affichage, le filtrage et la recherche des produits.
 * Utilise des hooks de mémorisation pour optimiser les performances de rendu.
 * @returns {React.JSX.Element}
 * @constructor
 */
const Category = () => {
    // 1. ÉTATS LOCAUX
    const [produits, setProduits] = useState([]);// Données brutes venant de l'API
    const [searchValue, setSearchValue] = useState('');// Valeur du champ de recherche
    const [isLoading, setIsLoading] = useState(true);// État de chargement
    const [error, setError] = useState(null);// Gestion des messages d'erreur

    // 2. HOOKS PERSONNALISÉS
    const { addToCart,  cartCount, cartproduits, updateObjectContext } = useCart();
    const {getProduits} = useForm()



    // Dès que la liste cartProduits change, l'objet global est mis à jour
    useEffect(() => {
        updateObjectContext(cartproduits);
    }, [cartproduits, updateObjectContext]);

   // console.log("objectCart : ", objectCart);
     /**
     * 🔄 Récupération des données (API)
     * useCallback évite que la fonction ne soit recréée à chaque re-rendu
     * @type {(function(): Promise<void>)|*}
     */
    const fetchProduits = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            //la fonction pour se connecter à l'API
            const produits = await getProduits( Texts.URLS.GET_SACS)

            //on recupère soit les données du API  : produits.data
            setProduits(produits.data || []);
            console.log(`[Category] ✅ ${produits?.length || 0} produits chargés`);

        } catch (err) {
            console.error('[Category] ❌ Erreur:', err);
            setError(Texts.ERREUR_DB);// On utilise nos constantes de texte
        } finally {
            setIsLoading(false);
        }
         // ✅ send doit être stable (provenant de useFetch)
    }, []);


    /**
     * ✅ 🚀 Effet de bord : Chargement initial au montage du composant
     */
    useEffect(() => {
        fetchProduits();
        // ✅ fetchProduits est stable grâce à useCallback
    }, [fetchProduits]);


    /**
     * 🔍 Filtrage des données (Calcul dérivé), Logique de recherche mémorisée.
     * * Filtre la liste des sacs en fonction du libellé ou de la description.
     *  * Optimisé pour ne pas se relancer inutilement lors des re-rendus du composant.
     * @return {*[produit]}
     */
    const produitsFiltres = useMemo(() => {
        //Si la recherche est vide, on affiche tout le catalogue immédiatement
        if (!searchValue?.trim()) {
            return produits;
        }
        // Sécurité : on vérifie que les champs existent avant de faire le .includes()
        const searchLower = searchValue.toLowerCase().trim();
        return produits.filter(sac =>
            sac.libelle?.toLowerCase().includes(searchLower) ||
            sac.description?.toLowerCase().includes(searchLower)
        );
        // Recalcule uniquement si les produits ou la recherche changent
    }, [produits, searchValue]);


    /**
     * 🛒 Gestionnaire d'ajout au panier
     * useCallback est crucial ici pour éviter de casser l'optimisation de CategoryList.
     * @type {(function(*): void)|*}
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
                    <Boutton onClick={fetchProduits} value="🔄 Réessayer" />
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
                            totalCount={produits.length}
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


                />
            </div>
        </div>

    );

};

export default Category;