import SearchIcon from "/search.svg";
import { useState } from "react";

function Search() {
    const [placeholder, setPlaceholder] = useState("Шукати...");
    return (
        <div className="search">
            <img src={SearchIcon} alt="Search" />
            <input
                type="text"
                placeholder={placeholder}
                className="search-input"
                onFocus={() => setPlaceholder("")}
                onBlur={() => setPlaceholder("Шукати...")}
            />
        </div>
    );
}
export default Search