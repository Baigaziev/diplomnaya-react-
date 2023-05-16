import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <h2>Marketing and Events Department</h2>
      <h3>People you can contact</h3>
      <div className="employee">
        <img
          src="https://avatars.dzeninfra.ru/get-zen_doc/1704908/pub_5df70d3ab477bf00afd0ef48_5df70e015ba2b500adc458df/scale_1200"
          alt="Marketing Employee 1"
        />
        <p>Name: John Doe</p>
        <p>Position: Marketing Manager</p>
        <p>Email: john.doe@example.com</p>
      </div>
      <div className="employee">
        <img
          src="https://avatars.mds.yandex.net/i?id=c819e254bbc0f897aecb770f157e4891b0d657a5-8428027-images-thumbs&n=13"
          alt="Marketing Employee 2"
        />
        <p>Name: Jane Smith</p>
        <p>Position: Events Coordinator</p>
        <p>Email: jane.smith@example.com</p>
      </div>
      <div className="employee">
        <img
          src="https://ampravda.ru/files/articles-2/48625/77y4i7u8p77j-640.jpg"
          alt="Marketing Employee 3"
        />
        <p>Name: Bob Johnson</p>
        <p>Position: Marketing Assistant</p>
        <p>Email: bob.johnson@example.com</p>
      </div>

      <h2>Sales Department</h2>
      <div className="employee">
        <img
          src="https://avatars.mds.yandex.net/i?id=ab87b69855990cbecd611dff15e9392b485891cd-9182192-images-thumbs&n=13"
          alt="Sales Employee 1"
        />
        <p>Name: Mary Davis</p>
        <p>Position: Sales Manager</p>
        <p>Email: mary.davis@example.com</p>
      </div>
      <div className="employee">
        <img
          src="https://img.freepik.com/free-photo/emotions-and-people-concept-headshot-of-serious-looking-handsome-man-with-beard-looking-confident-and-determined_1258-26730.jpg"
          alt="Sales Employee 2"
        />
        <p>Name: Tom Lee</p>
        <p>Position: Sales Associate</p>
        <p>Email: tom.lee@example.com</p>
      </div>
      <div className="employee">
        <img
          src="https://avatars.mds.yandex.net/i?id=8e39d4e2c9f5af158e8aaaa0d703326357985c98-8425915-images-thumbs&n=13"
          alt="Sales Employee 3"
        />
        <p>Name: Sarah Brown</p>
        <p>Position: Sales Assistant</p>
        <p>Email: sarah.brown@example.com</p>
      </div>
      <div className="info">
        <h1>Contact</h1>
        <p>
          Phone number: <a href="tel:+99702514897">+996702514897</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:albertto_dourio@mail.ru">albertto_dourio@mail.ru</a>
        </p>
        <p>Physical address: 123 Main St, Anytown USA</p>
        <p>Legal address: 456 Oak St, Anytown USA</p>
        <p>Hours of operation: Monday - Friday, 9am - 5pm</p>
      </div>
    </div>
  );
}
