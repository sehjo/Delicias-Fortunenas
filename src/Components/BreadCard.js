import React from 'react';
import '../styles/BreadCard.css';

/**
 * BreadCard Component
 * Displays a card with bread information including image, title, description, and price
 * @param {string} title - The name of the bread
 * @param {string} price - The price of the bread
 * @param {string} description - A brief description of the bread
 * @param {string} image - The path to the bread image
 */
export function BreadCard({ title, price, description, image }) {
    return (
        <div className="bread-card">
            <div className="bread-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="bread-card-content">
                <h3 className="bread-card-title">{title}</h3>
                <p className="bread-card-description">{description}</p>
                <p className="bread-card-price">{price}</p>
            </div>
        </div>
    );
}
