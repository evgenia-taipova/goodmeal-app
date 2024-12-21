import CartIcon from "/cart.svg";

function CartBtn() {
    return (
        <button className="cart-btn">
            <img src={CartIcon} alt="Кошик" />
            <span>Кошик</span>
        </button>
    );
}
export default CartBtn;
