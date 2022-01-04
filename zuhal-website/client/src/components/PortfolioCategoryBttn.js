export default function PortfolioCategoryBttn({imgData, setCategory}) {
    return (
        <button 
            onClick={() => setCategory(imgData.category)}
            className="portfolio-category-bttn">
            <img src={imgData.src} alt={imgData.alt}/>
            <p className="portfolio-category-bttn--text">
            {imgData.title}
            </p>
      </button>
    )
}