import UserIcon from "/account-green.svg";

function AccountBtn() {
    return (
        <button className="account-btn">
            <img src={UserIcon} alt="Акаунт користувача" />
            <span>Акаунт користувача</span>
        </button>
    );
}
export default AccountBtn;