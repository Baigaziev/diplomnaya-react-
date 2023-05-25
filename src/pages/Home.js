import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
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
