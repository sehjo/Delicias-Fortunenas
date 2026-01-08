import React from 'react';
import './ProductCard.css';

/**
 * ProductCard Component
 * Displays a card with product info - image, title, description, and price
 * @param {string} title - Name of the product
 * @param {string} price - How much it costs
 * @param {string} description - Short description
 * @param {string} image - Image path
 */
export function ProductCard({ title, price, description, image }) {
    return (
        // Main card wrapper
        <div className="product-card">
            {/* Image container */}
            <div className="product-card-image">
                <img src={image} alt={title} />
            </div>
            {/* Card content - title, description, price */}
            <div className="product-card-content">
                <h3 className="product-card-title">{title}</h3>
                <p className="product-card-description">{description}</p>
                <p className="product-card-price">{price}</p>
            </div>
        </div>
    );
}
