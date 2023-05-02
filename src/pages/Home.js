import React, { useState } from "react";
import "./Home.css";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");
  const [searchError, setSearchError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchingProduct = products.find(
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
      <div className="video-reviews">
  <h3>Видеообзоры</h3>
  <iframe 
    width="250" 
    height="250" 
    src="https://www.youtube.com/embed/vhGmUoiKfx4"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  ></iframe>
  <iframe 
    width="250" 
    height="250" 
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  ></iframe>
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
  ></iframe>
</div>
    </div>
    
  );
}


const products = [
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
