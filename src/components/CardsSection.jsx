import Categories from "./Categories";
import ArrowGreyRight from "/arrow-lightblack-right.svg";
import ArrowLightGreyLeft from "/arrow-lightgrey-left.svg";
import ArrowBlackRight from "/arrow-black-right.svg";
import FilterIcon from "/filter-icon.svg";
import SortIcon from "/sort-icon.svg";
import CardsList from "./CardsList.jsx";


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

                    <CardsList/>
                </div>
            </div>
            <div className="pagination-section">
                <button className="show-more">Показати ще</button>
                <div className="pagination">
                    <button className="pagination-arrow">
                        <img src={ArrowLightGreyLeft} alt="Previous page" />
                    </button>
                    <button className="page-number active">1</button>
                    <button className="page-number">2</button>
                    <button className="page-number">3</button>
                    <span className="ellipsis">...</span>
                    <button className="page-number">10</button>
                    <button className="pagination-arrow">
                        <img src={ArrowBlackRight} alt="Next page" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CardsSection;
