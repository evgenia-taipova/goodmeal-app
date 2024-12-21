import Categories from "./Categories";
import ArrowGreyRight from "/arrow-lightblack-right.svg";
import FilterIcon from "/filter-icon.svg";
import SortIcon from "/sort-icon.svg";

function CardsSection() {
    return (
        <div className="cards-section">
            <div className="cards-main">
                <nav className="breadcrumbs">
                    <span>Головна</span>
                    <img src={ArrowGreyRight} alt="" />
                    <span>Фрукти</span>
                </nav>
                <div className="cards__inner">
                    <div className="cards__inner-top">
                        <h2>Всі фрукти</h2>
                        <Categories />
                    </div>
                    <div className="cards__filters-bar">
                        <div className="filter-button">
                            <img src={FilterIcon} alt="FilterIcon" />
                            <span>Фільтри</span>
                        </div>
                        <div className="sort-button">
                            <span>Популярні</span>
                            <img src={SortIcon} alt="SortIcon" />
                        </div>
                    </div>
                    
                    <div>
                        <ul></ul>
                    </div>
                </div>
            </div>
            <div className="pagination-section">
                <button className="show-more">Показати ще</button>
                <div className="pagination">
                    <button className="page-arrow">&lt;</button>
                    <button className="page-number active">1</button>
                    <button className="page-number">2</button>
                    <button className="page-number">3</button>
                    <button className="page-number">4</button>
                    <button className="page-arrow">&gt;</button>
                </div>
            </div>
        </div>
    );
}
export default CardsSection;
