import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <form>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" />
        <button type="submit">Search</button>
      </form>
      <div className="welcome-message">
        <h2>Welcome to our gadget store for gamers!</h2>
        <p>Here you can find the latest and greatest gaming gadgets, all in one place.</p>
      </div>
    </div>
  );
}

