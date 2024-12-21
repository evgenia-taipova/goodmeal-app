function CategoryBtn({ name, count, isActive }) {
    return (
        <button className={`category-btn ${isActive ? "active" : ""}`}>
            <span className="category-name">{name}</span>
            <span className="category-count">{count}</span>
        </button>
    );
}
export default CategoryBtn;
