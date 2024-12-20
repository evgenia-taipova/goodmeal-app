const linksData = [
    {
        title: "Онлайн супермаркет",
        links: [
            "Замовлення",
            "Формування замовлення",
            "Отримання замовлення",
            "Зміни у замовленні",
            "Правила інтернет-продажів",
        ],
    },
    {
        title: "Для гостей",
        links: [
            "Про “Власний рахунок”",
            "Правила програми “Власний рахунок”",
            "Супермаркети",
            "Події",
            "Подарункові сертифікати",
            "Доставка для бізнесу",
        ],
    },
    {
        title: "Цікавинки",
        links: [
            "Екодружність",
            "Соціальна турбота",
            "Фермерська продукція",
            "Власна кондитерська",
            "“Наша марка”",
            "Друзі “Goodmeal”",
        ],
    },
    {
        title: "Про компанію",
        links: [
            "Робота в “Good meal”",
            "Новини",
            "Контакти",
            "Правила безпеки",
            "Правила інтернет-продажів",
        ],
    },
];
function LinkSection() {
    return (
        <div className="footer-links">
            {linksData.map((section, index) => (
                <div className="footer-column" key={index}>
                    <h4>{section.title}</h4>
                    <ul>
                        {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default LinkSection;
