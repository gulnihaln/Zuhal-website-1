import imagesData from '../utils/imagesData'

export default function PortfolioCategoryBttn({
    setCategory, category 
}) {
    // Button image src set to the the first image in the images data
    // that matches the category prop
    // this logic will be replaced by a API request

    const imgData = imagesData.find(imgData => 
        imgData.category === category
    )

    return (
        <button 
            onClick={() => setCategory(imgData.category)}
            className="portfolio-category-bttn">
            <img 
                className="portfolio-category-img"
                src={imgData.src}
                alt={imgData.alt}/>
            <p className="portfolio-category-text">
                {imgData.title}
            </p>
      </button>
    )
}