import React, { useState, useEffect } from "react";
import photo4 from "../../asests/photo4.jpg";
import photo5 from "../../asests/photo5.jpg";
import photo6 from "../../asests/photo6.jpg";
import photo7 from "../../asests/photo7.jpg";
import photo8 from "../../asests/photo8.jpg";
import photo9 from "../../asests/photo9.jpg";
import photo10 from "../../asests/photo10.jpg";
import "./Slide.css";

export function Slider() {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);

  // Хук Effect
  useEffect(() => {
    // Запускаем интервал и сохраняем его идентификатор в переменную interval
    const interval = setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        // Вычисляем индекс следующего слайда, который должен вывестись
        const res = current === img.length - 1 ? 0 : current + 1;
        // Возвращаем индекс
        return res;
      });
    }, 3000);
    // Возвращаем функцию, которая вызовется при размонтировании компонента и остановит интервал
    return () => clearInterval(interval);
  }, []);

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  // Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  const handleControlClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
      <div className="slider-controls">
        {img.map((_, index) => (
          <div
            key={index}
            className={`slider-control ${index === activeIndex && "active"}`}
            onClick={() => handleControlClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

const img = [
  <div key={photo4} className="slider-img-container">
    <img src={photo4} alt="icon" />
    <span>Headphones</span>
  </div>,
  <div key={photo10} className="slider-img-container">
    <img src={photo10} alt="icon-w" />
    <span>Joysticks</span>
  </div>,
  <div key={photo6} className="slider-img-container">
    <img src={photo6} alt="icon-r" />
    <span>Keyboards</span>
  </div>,
  <div key={photo7} className="slider-img-container">
    <img src={photo7} alt="icon-t" />
    <span>Laptops</span>
  </div>,
  <div key={photo8} className="slider-img-container">
    <img src={photo8} alt="icon-n" />
    <span>Computers</span>
  </div>,
  <div key={photo9} className="slider-img-container">
    <img src={photo9} alt="icon-n" />
    <span>Armchairs</span>
  </div>,
  <div key={photo5} className="slider-img-container">
    <img src={photo5} alt="icon-n" />
    <span>Mice</span>
  </div>,
];
