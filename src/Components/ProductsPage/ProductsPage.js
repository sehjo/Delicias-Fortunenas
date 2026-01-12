import React from 'react';
import './ProductsPage.css';
import { Footer } from '../Footer/Footer';
import { ProductCard } from '../ProductCard/ProductCard';

// Importar todas las imágenes de productos
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

// Imagen para la sección del medio
import chefImage from '../../Image/johanna_image.jpeg';

export function ProductsPage() {
    // Definir todos los productos organizados por categoría
    const products = [
        // Categoría: Panes artesanales (1, 2, 5, 7)
        {
            id: 1,
            title: "Pan 1",
            description: "Delicioso pan artesanal, recién horneado con ingredientes de alta calidad.",
            price: "$2.50",
            image: artisanalPanini
        },
        {
            id: 2,
            title: "Pan 2",
            description: "Pan suave y esponjoso, perfecto para tu desayuno o merienda diaria.",
            price: "$3.00",
            image: briocheBun
        },
        {
            id: 5,
            title: "Pan 5",
            description: "Una opción saludable y deliciosa para toda la familia y ocasión.",
            price: "$3.00",
            image: classicBun
        },
        {
            id: 7,
            title: "Pan 7",
            description: "Pan integral con granos, nutritivo y sabroso para tu bienestar diario.",
            price: "$2.50",
            image: oatsBun
        },
        // Categoría: Panes de molde y rebanados (9, 10, 11, 12, 13)
        {
            id: 9,
            title: "Pan 9",
            description: "Receta casera tradicional, horneado con ingredientes naturales frescos.",
            price: "$2.50",
            image: multigrainBread
        },
        {
            id: 10,
            title: "Pan 10",
            description: "Pan de molde suave, perfecto para sandwiches y tostadas deliciosas.",
            price: "$2.50",
            image: wholemealBread
        },
        {
            id: 11,
            title: "Pan 11",
            description: "Brioche artesanal con mantequilla, una delicia para tu paladar exigente.",
            price: "$3.00",
            image: signatureBrioche
        },
        {
            id: 12,
            title: "Pan 12",
            description: "Pan especial de la casa, elaborado con receta secreta tradicional.",
            price: "$2.50",
            image: signatureBrioche2
        },
        {
            id: 13,
            title: "Pan 13",
            description: "Pan rebanado perfecto, ideal para tu desayuno rápido y nutritivo.",
            price: "$2.50",
            image: slicedBread
        },
        // Categoría: Postres (3, 4, 6, 8, 14)
        {
            id: 3,
            title: "Pan 3",
            description: "Elaborado con masa madre, ideal para acompañar tus comidas favoritas.",
            price: "$2.50",
            image: cinnamonRolls
        },
        {
            id: 4,
            title: "Pan 4",
            description: "Pan tradicional con un toque especial, horneado con amor cada día.",
            price: "$2.50",
            image: carrotCake
        },
        {
            id: 6,
            title: "Pan 6",
            description: "Crujiente por fuera, suave por dentro, perfecto para cualquier momento.",
            price: "$2.50",
            image: orangeCake
        },
        {
            id: 8,
            title: "Pan 8",
            description: "Dulce y aromático, ideal para acompañar tu café o té preferido.",
            price: "$3.00",
            image: christmasCake
        },
        {
            id: 14,
            title: "Pan 14",
            description: "Pastel tres leches casero, húmedo y delicioso con sabor inigualable.",
            price: "$4.00",
            image: tresLechesCake
        }
    ];

    // Dividir productos en dos mitades
    const firstHalf = products.slice(0, 6);
    const secondHalf = products.slice(6);

    return (
        <div className="products-page">
            {/* Contenido principal */}
            <div className="products-content">
                {/* Texto superior */}
                <div className="products-header">
                    <p>Nuestros panes son los mas sabrosos</p>
                </div>

                {/* Primera mitad de productos (6 cards) */}
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

                {/* Sección del medio con imagen y texto */}
                <div className="middle-section">
                    <div className="middle-content">
                        <div className="middle-text">
                            <h2>Delicias Fortuneñas.</h2>
                            <p>
                                Somos una panadería artesanal comprometida con la calidad y el sabor auténtico.
                                Cada uno de nuestros productos está elaborado con ingredientes frescos y naturales,
                                siguiendo recetas tradicionales que han pasado de generación en generación.
                                <br /><br />
                                Nuestro compromiso es ofrecerte productos horneados con amor y dedicación,
                                para que cada bocado sea una experiencia única. Trabajamos únicamente bajo pedido
                                para garantizar la frescura y calidad de cada producto que llega a tu mesa.
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

                {/* Segunda mitad de productos (restantes) */}
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

            {/* Footer */}
            <Footer />
        </div>
    );
}
