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
        <p>
          Here you can find the latest and greatest gaming gadgets, all in one
          place.
        </p>
      </div>
    </div>
  );
}

const products = [
  { id: 1, name: "Sony DualSense Edge" },
  { id: 2, name: " Anda Seat! AD12XL" },
  { id: 3, name: "Gaming Headset" },
  { id: 4, name: "Gaming Laptop" },
  { id: 5, name: "Gaming Monitor" },
];
