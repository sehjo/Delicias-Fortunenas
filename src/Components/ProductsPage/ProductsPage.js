import React from 'react';
import './ProductsPage.css';
import { Footer } from '../Footer/Footer';
import { ProductCard } from '../ProductCard/ProductCard';

// Import all product images
import artisanalPanini from '../../Image/artisanal_panini_sandwiches.png';
import briocheBun from '../../Image/brioche_hamburger_bun.png';
import carrotCake from '../../Image/carrot_cake.png';
import cinnamonRolls from '../../Image/cinnamon_rolls.png';
import classicBun from '../../Image/classic_artisan_hamburger_bun.png';
import orangeCake from '../../Image/dry_orange_and_butter_cake.png';
import oatsBun from '../../Image/Hamburger_bun_with_wholegrain_oats.png';
import christmasCake from '../../Image/long-soaked_Christmas_cake.png';
import multigrainBread from '../../Image/Multigrain_sliced ​_bread.png';
import wholemealBread from '../../Image/Premium_wholemeal_sliced ​_bread.png';
import signatureBrioche from '../../Image/Signature_brioche_with_local_butter.png';
import signatureBrioche2 from '../../Image/Signature_brioche_with_local_butter_2.png';
import slicedBread from '../../Image/sliced_bread.png';
import tresLechesCake from '../../Image/tres_leches_cake.png';

// Image for the middle section
import chefImage from '../../Image/johanna_image.jpeg';

export function ProductsPage() {
    // Define all products organized by category
    const products = [
        // Category: Special Breads and Paninis
        {
            id: 1,
            title: "Panini Artesanal",
            description: "Pan de miga suave con corteza fina. Perfecto para sándwiches gourmet. Disponible en 18 y 30 cm.",
            price: "",
            image: artisanalPanini
        },
        {
            id: 2,
            title: "Pan Brioche para Hamburguesa",
            description: "Miga de alveolatura fina con dulzor balanceado. Alto contenido de mantequilla fresca.",
            price: "",
            image: briocheBun
        },
        {
            id: 5,
            title: "Pan de Hamburguesa Clásico",
            description: "Textura suave y elástica. Marcado artesanal con o sin semillas de ajonjolí.",
            price: "",
            image: classicBun
        },
        {
            id: 7,
            title: "Pan de Hamburguesa Integral",
            description: "Con avena integral y chía. Miga densa y suave, perfil nutricional superior.",
            price: "",
            image: oatsBun
        },
        // Category: Premium Sliced Breads
        {
            id: 9,
            title: "Pan Multigrano Ancestral",
            description: "Alta densidad nutricional con cebada, linaza y chía. Miga húmeda y compleja.",
            price: "",
            image: multigrainBread
        },
        {
            id: 10,
            title: "Pan Integral Premium",
            description: "Fermentación prolongada con trigo integral. Notas profundas de trigo tostado.",
            price: "",
            image: wholemealBread
        },
        {
            id: 11,
            title: "Brioche de Mantequilla Local",
            description: "Miga que se deshace al paladar. Mantequilla artesanal de la región y huevos frescos.",
            price: "",
            image: signatureBrioche
        },
        {
            id: 12,
            title: "Brioche Rebanado",
            description: "Especial para tostadas francesas. Estructura hilada extremadamente ligera y aireada.",
            price: "",
            image: signatureBrioche2
        },
        {
            id: 13,
            title: "Pan de Molde Artesanal",
            description: "Fermentación prolongada con mínima levadura. Miga algodonosa, 18 o 25 rebanadas.",
            price: "",
            image: slicedBread
        },
        // Category: Seasonal Bakery
        {
            id: 3,
            title: "Rollos de Canela",
            description: "Bollería laminada con frosting de queso crema. Masa de fermentación prolongada.",
            price: "",
            image: cinnamonRolls
        },
        {
            id: 4,
            title: "Queque de Zanahoria Gourmet",
            description: "Con almendras y buttercream. Contraste de texturas: suave miga, crema y crujiente.",
            price: "",
            image: carrotCake
        },
        {
            id: 6,
            title: "Queque de Naranja y Mantequilla",
            description: "Bizcocho de miga cerrada con azúcar moreno. Aromatización en múltiples niveles.",
            price: "",
            image: orangeCake
        },
        {
            id: 8,
            title: "Queque Navideño",
            description: "Maceración prolongada con ron. Frutos secos durante semanas. Temporada especial.",
            price: "",
            image: christmasCake
        },
        {
            id: 14,
            title: "Pastel de Tres Leches",
            description: "Bizcocho aireado que absorbe infusión láctea. Contraste de texturas y humedades.",
            price: "",
            image: tresLechesCake
        }
    ];

    // Split products into two halves
    const firstHalf = products.slice(0, 6);
    const secondHalf = products.slice(6);

    return (
        <div className="products-page">
            {/* Main content */}
            <div className="products-content">
                {/* Header text */}
                <div className="products-header">
                    <p>Nuestros panes son los mas sabrosos</p>
                </div>

                {/* First half of products (6 cards) */}
                <div className="products-grid">
                    {firstHalf.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>

                {/* Middle section with image and text */}
                <div className="middle-section">
                    <div className="middle-content">
                        <div className="middle-text">
                            <h2>Delicias Fortuneñas.</h2>
                            <p>
                                Somos una panadería artesanal comprometida con la calidad y el sabor auténtico.
                                Cada uno de nuestros productos está elaborado con ingredientes frescos y naturales. 
                                <br /><br />
                                Nuestro compromiso es ofrecerte productos horneados con amor y dedicación,
                                para que cada bocado sea una experiencia única. Trabajamos únicamente bajo pedido
                                para garantizar la frescura y calidad de cada producto que llega a tu mesa o negocio.
                            </p>
                            <button className="contact-button">
                                Contáctenos
                            </button>
                        </div>
                        <div className="middle-image">
                            <img src={chefImage} alt="Delicias Fortuneñas" />
                        </div>
                    </div>
                </div>

                {/* Second half of products (remaining) */}
                <div className="products-grid">
                    {secondHalf.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}
