import Minus from "/minus.svg";
import Plus from "/plus.svg";

function CardItem({title, description, quantityUnit, price, discountPrice, image}) {
    return (
        <div className="card-item">
            <div></div>
            <div className="card-main">
                <div className="card-title">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div></div>
                <div className="quantity-selector" data-unit={quantityUnit}>
                    <button>
                        <img src={Minus} alt="" />
                    </button>
                    <span>1</span>
                    <button>
                        <img src={Plus} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CardItem;
