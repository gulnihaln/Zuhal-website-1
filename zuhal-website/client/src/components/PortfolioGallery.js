export default function PortfolioGallery({category, setCategory}) {
    return (
        <div className="portfolio-gallery">
            <button onClick={() => setCategory(null)}>x</button>
            <p>{category} Gallery</p>
        </div>
    )
}