import imagesData from '../utils/imagesData'

export default function PortfolioCategoryBttn({
    setCategory, 
    category 
}) {

    const imgData = imagesData.find(imgData => 
        imgData.category === category
    )

    const styles = {
        backgroundImage: `url(${imgData.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <button
            style={styles}
            onClick={() => setCategory(imgData.category)}
            className="portfolio-category-bttn">
            <p className="portfolio-category-text">
                {imgData.title}
            </p>
      </button>
    )
}