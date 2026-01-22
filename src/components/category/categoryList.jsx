// components/category/CategoryList.jsx
import React from 'react';
import CartItem from '../CartItem';

/**
 * Affiche la liste des produits en grille
 * @param {Array} produits - Liste des produits à afficher
 * @param {Function} onAdd - Callback pour ajouter au panier
 */
const CategoryList = ({ produits, onAdd }) => {
    if (!produits || produits.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                Aucun produit à afficher
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {produits.map(produit => (
                    <CartItem
                        key={produit._id}
                        id={produit._id}
                        titre={produit.libelle}
                        description={produit.description}
                        price={produit.prix}
                        image={produit.image}
                        // ✅ CORRECTION ICI : Passer le produit complet
                        onClick={() => onAdd(produit)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;