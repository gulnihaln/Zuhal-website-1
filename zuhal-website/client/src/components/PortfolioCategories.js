import PortfolioCategoryBttn from './PortfolioCategoryBttn'

export default function PortfolioCategories({
    categories,
    setCategory
}) {
    return (
        <div className="portfolio-categories">
        {categories.map((category, i) => 
            <PortfolioCategoryBttn
                key={`portfolio-category${i}`}
                setCategory={setCategory} 
                category={category}
            />
        )}
        </div> 

    )
}