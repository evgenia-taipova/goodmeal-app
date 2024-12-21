import Logo from "/logo.svg";
import CatalogBtn from "./ui/CatalogBtn";
import Search from "./ui/SearchInput";
import AccountBtn from "./ui/AccountBtn";
import CartBtn from "./ui/CartBtn";

function Header() {
    return (
        <header className="header">
            <div className="header__logo-catalog">
                <img src={Logo} alt="Logo" />
                <CatalogBtn />
            </div>
            <Search />
            <AccountBtn />
            <CartBtn />
        </header>
    );
}
export default Header;
