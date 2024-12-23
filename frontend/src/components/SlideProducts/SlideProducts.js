import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SlideProducts.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productsData from "./productsData"; 

const SlideProducts = () => {
  const productsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productWidth, setProductWidth] = useState(0);
  const autoSlideInterval = useRef(null);
  const productCount = productsData.length; 
  const visibleProducts = 3;

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? productCount : prev - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === productCount ? 1 : prev + 1;
      return newIndex;
    });
  };

  useEffect(() => {
    if (productsRef.current) {
      const productElement = productsRef.current.querySelector(".product");
      if (productElement) {
        setProductWidth(productElement.offsetWidth + 50); 
      }
    }
  }, []);

  useEffect(() => {
    if (productsRef.current) {
      productsRef.current.style.transition = "transform 0.5s ease";
      productsRef.current.style.transform = `translateX(-${
        currentIndex * productWidth
      }px)`;
    }
  }, [currentIndex, productWidth]);

  useEffect(() => {
    if (productsRef.current) {
      const productElements = productsRef.current.querySelectorAll(".product");
      for (let i = 0; i < visibleProducts; i++) {
        const clone = productElements[i].cloneNode(true);
        productsRef.current.appendChild(clone);
      }
    }
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    
    <div className="product-container">
      <div className="btn-container">
        <div className="line"></div>
        <div className="btn-slide">
          <button onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="products" ref={productsRef}>
        {productsData.map((product) => (
          <Link  to={`/productdetails/${product.id}`} className="product">
            <div className="product-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-price">
              <h2 className="name">{product.name}</h2>
              <p className="price">Giá: <b>{product.price}</b></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlideProducts;







