import CategoryBtn from "./ui/CategoryBtn";

function Categories() {
    const categories = [
        { name: "Всі", count: 682, isActive: true },
        { name: "Сезонні фрукти", count: 44, isActive: false },
        { name: "Ягоди", count: 23, isActive: false },
        { name: "Фрукти", count: 65, isActive: false },
        { name: "Смузі та фреші", count: 21, isActive: false },
        { name: "Фруктові снеки", count: 91, isActive: false },
        { name: "Горіхи та сухофрукти", count: 221, isActive: false },
    ];
    return (
        <div className="cards__top-categories">
            {categories.map((category, index) => {
                return (
                    <CategoryBtn
                        key={index}
                        name={category.name}
                        count={category.count}
                        isActive={category.isActive}
                    />
                );
            })}
        </div>
    );
}
export default Categories;
