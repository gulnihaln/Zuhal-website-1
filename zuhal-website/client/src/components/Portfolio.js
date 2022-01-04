import React, { useState, useEffect, useRef } from "react";
import './styles/Portfolio.css'
import imagesData from "../utils/imagesData";
import PortfolioGallery from './PortfolioGallery'
import PortfolioCategories from './PortfolioCategories'

export default function Portfolio() {
  const ref = useRef()
  const [category, setCategory] = useState(null);
  const categories = [...new Set(
    imagesData.map(imgData => imgData.category)
  )]

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [])

  return (
      <section 
        ref={ref}
        className="portfolio">
        <PortfolioCategories 
          categories={categories}
          setCategory={setCategory} />

        { category && 
          <PortfolioGallery 
            category={category}
            setCategory={setCategory}/> 
        }
      </section>
  );
}
