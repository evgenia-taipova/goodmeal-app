import CardItem from "./CardItem";
const products = [
    {
        id: 1,
        title: "Папайя",
        description: "Папайя, 100г",
        price: "18.90 грн",
        discountPrice: null, // если скидки нет
        quantityUnit: "grams",
        image: "/papaya.svg",
    },
    {
        id: 2,
        title: "Ожина фасована",
        description: "Ожина фасована, 250г",
        price: "99.00 грн",
        discountPrice: null,
        quantityUnit: "grams",
        image: "path-to-blackberry-image",
    },
    {
        id: 3,
        title: "Диня Валенсія",
        description: "Диня Валенсія, 100г",
        price: "6.50 грн",
        discountPrice: "8.90 грн", // если есть скидка
        quantityUnit: "grams",
        image: "path-to-melon-image",
    },
    // Добавьте остальные товары по аналогии
];

function CardsList() {
    return (
        <div className="card-list">
            {products.map((product, index) => (
                <>
                    <CardItem
                        key={index}
                        title={product.title}
                        description={product.description}
                        quantityUnit={product.quantityUnit}
                    />
                    <img src={product.image} alt="" />
                </>
            ))}
        </div>
    );
}
export default CardsList;
