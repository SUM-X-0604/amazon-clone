import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://m.media-amazon.com/images/I/61yuQvDrMdL._SX3000_.jpg"
                alt=""
            />

            {/* Product ID, title, rating, image */}
            <div className="home__row">
                <Product
                    id="1465463"
                    title="Two Indian Girls: A Murder Mystery Novel (The Kanke Killings Trilogy Book 2)"
                    price={199}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81tPRESKAuL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="254653"
                    title="Durfi Hybrid Memory Foam Soft Pocket Spring Hotel Comfort Bed Mattress 10 Inches - King Size Bed(75x72x10 Inches, Memory Foam Mattress)"
                    price={25999}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61lRZS1dSpL._SX522_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="856433"
                    title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)"
                    price={22990}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71i8f3-DsuL._SY445_.jpg"
                />
                <Product
                    id="45635131"
                    title="Adcom Junior Studio Wired On-Ear Stereo Headphones with Microphone, Adjustable Leather Padded Cushions and 40mm Drivers (Grey/Green)"
                    price={499}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71O8JsoMD2L._SY355_.jpg"
                />
                <Product
                    id="354645"
                    title="Samsung Galaxy Book2 Pro 360  13.3 AMOLED Display Intel 12th Gen core i5-1240U Processor, 16 GB RAM, 512 GB + Samsung Galaxy Buds Pro"
                    price={124480}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71loE0yJt3L._SX425_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12312341"
                    title="Whirlpool 1.5 Ton 3 Star, Inverter Split AC (Copper, Dust Filter, Convertible 4-in-1 Cooling Mode, 2021 Model, 1.5T MAGICOOL CONVERT 3S COPR INV, White)"
                    price={32990}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41uMPN7SoIL._SX342_.jpg"
                />
            </div>

            {/* Product */}
        </div>
    );
}

export default Home;
