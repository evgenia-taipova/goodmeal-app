import CatalogIcon from "/catalog.svg";

function CatalogBtn() {
    return (
        <button className="catalog-btn">
            <img src={CatalogIcon} alt="" />
            <span>Каталог</span>
        </button>
    );
}
export default CatalogBtn;