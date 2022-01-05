import React, { useState, useEffect, useRef } from "react";
import './styles/Portfolio.css'
import PortfolioGallery from './PortfolioGallery'
import PortfolioCategories from './PortfolioCategories'

export default function Portfolio() {
  const ref = useRef()
  const [category, setCategory] = useState(null);
  const categories = ["Bridal", "Occasions", "Beauty and Editorial", "Commercial",]

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
