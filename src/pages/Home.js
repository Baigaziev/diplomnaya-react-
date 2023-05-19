import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");
  const [searchError, setSearchError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchingProduct = product.find(
      (product) => product.id === parseInt(searchTerm)
    );
    if (matchingProduct) {
      setSearchError(false);
      window.location.href = `/product/${matchingProduct.id}`;
    } else {
      setSearchError(true);
      console.log(`Product with ID "${searchTerm}" not found`);
    }
    setPreviousSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="Home">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          placeholder="search by product"
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchError && (
        <p className="search-error">Product not found. Please try again.</p>
      )}
      {previousSearch && (
        <p className="previous-search">
          Your previous search was for product with ID "{previousSearch}"
        </p>
      )}
      <div className="welcome-message">
        <h2 className="fade-in">Welcome to our gadget store for gamers!</h2>
        <p className="fade-in">
          Here you can find the latest and greatest gaming gadgets, all in one
          place.
        </p>
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://gamerwall.pro/uploads/posts/2022-03/1648550623_1-gamerwall-pro-p-dzhoistiki-fon-krasivie-1.jpg"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Immerse yourself in the exciting world of games with our new
            joystick. Unique design, comfortable ergonomics and high
            functionality make it the perfect choice for any gamer. Feel every
            movement, every vibration, and enjoy unparalleled control over the
            gameplay. "
          </p>
        </div>

        <div className="image-container">
          <img
            src="https://1k.by/images/site/news/2020/03/26/tdc111234c.jpg "
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Open the door to the exciting world of gaming with our powerful
            gaming laptop. Combining high performance and advanced technology,
            it will bring you amazing gaming emotion.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://hyperpc.ru/images/product/content_category/main/hyperpc-gaming-landing-mobile-banner_webp.jpg?4"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Introducing our amazing gaming PCs, designed specifically for true
            gamers. With powerful processors and advanced graphics capabilities,
            they let you enjoy high-definition games with amazing detail and
            smooth gameplay.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://blog.cs.money/wp-content/uploads/2023/04/razer-1.jpg"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Discover amazing comfort and elegance from our gaming chairs!
            Designed with your comfort and gaming experience in mind, our chairs
            are the perfect companion for your gaming adventures.
          </p>
        </div>

        <div className="image-container">
          <img
            src="https://4frag.ru/image/data/News/Zowie/razer-viper-8khz-news-1.jpg"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Create new horizons in the world of games with our gaming mice!
            Specially designed for gamers of all levels, they will be your
            reliable and stylish companion for your gaming adventures.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://toptechnika.ru/wp-content/uploads/2022/05/Mechanical-Keyboard.webp"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Immerse yourself in the exciting world of gaming with our gaming
            keyboards! Stylish design, cutting-edge technology and unsurpassed
            quality come together in this perfect companion for your gaming
            sessions.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://cubiq.ru/wp-content/uploads/2019/11/kraken-v3-pro-1500x1000-1.jpg"
            alt="#"
            className="image"
          />
          <p className="text-overlay">
            Immersive audio immersion in gaming is what our gaming headphones
            offer. Feel every note, every rustle and every shot to make your
            gaming sessions a real adventure.
          </p>
        </div>
      </div>
    </div>
  );
}

const product = [
  {
    id: 1,
    name: "Sony DualSense Edge",
    description:
      "The Sony DualSense Edge is a high-performance controller designed specifically for the PlayStation 5.",
    image: "https://via.placeholder.com/150",
    category: "Joysticks",
  },
  {
    id: 2,
    name: "Anda Seat! AD12XL",
    description:
      "The Anda Seat! AD12XL is a premium gaming chair that provides maximum comfort during long gaming sessions.",
    image: "https://via.placeholder.com/150",
    category: "chairs",
  },
  {
    id: 3,
    name: "HyperX Cloud Alpha S",
    description:
      "The HyperX Cloud Alpha S is a high-quality gaming headset that features 7.1 surround sound and a detachable noise-cancelling microphone.",
    image: "https://via.placeholder.com/150",
    category: "headsets",
  },
  {
    id: 4,
    name: "Logitech G915 TKL",
    description:
      "The Logitech G915 TKL is a wireless gaming keyboard that offers a low-profile design, programmable keys, and customizable RGB lighting.",
    image: "https://via.placeholder.com/150",
    category: "keyboards",
  },
  {
    id: 5,
    name: "Alienware m15 R6",
    description:
      "The Alienware m15 R6 is a powerful gaming laptop that features an Intel Core i7 processor, NVIDIA GeForce RTX graphics, and a 15.6-inch display with a 240Hz refresh rate.",
    image: "https://via.placeholder.com/150",
    category: "laptops",
  },
  {
    id: 6,
    name: "ASUS ROG Swift PG279QM",
    description:
      "The ASUS ROG Swift PG279QM is a high-end gaming monitor that features a 27-inch QHD display with a 240Hz refresh rate and NVIDIA G-SYNC technology.",
    image: "https://via.placeholder.com/150",
    category: "monitors",
  },
];
