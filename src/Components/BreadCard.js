import React from 'react';
import '../styles/BreadCard.css';

/**
 * BreadCard Component
 * Displays a card with bread info - image, title, description, and price
 * @param {string} title - Name of the bread
 * @param {string} price - How much it costs
 * @param {string} description - Short description
 * @param {string} image - Image path
 */
export function BreadCard({ title, price, description, image }) {
    return (
        // Main card wrapper
        <div className="bread-card">
            {/* Image container */}
            <div className="bread-card-image">
                <img src={image} alt={title} />
            </div>
            {/* Card content - title, description, price */}
            <div className="bread-card-content">
                <h3 className="bread-card-title">{title}</h3>
                <p className="bread-card-description">{description}</p>
                <p className="bread-card-price">{price}</p>
            </div>
        </div>
    );
}
