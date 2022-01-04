import PortfolioCategoryBttn from './PortfolioCategoryBttn'

export default function PortfolioCategories({
    categories,
    setCategory
}) {
    return (
        <div className="portfolio-categories">
        {categories.map(category => 
            <PortfolioCategoryBttn 
                setCategory={setCategory} 
                category={category}
            />
        )}
        </div> 

    )
}