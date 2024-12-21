import LinkSection from "./LinkSection";
import iconPark from "/icon-park-outline_handle-c.svg";
import Logo from "/logo.svg";
import Facebook from "/facebook.svg";
import Instagram from "/instagram.svg";
import Viber from "/viber.svg";
import Telegram from "/telegram.svg";
import Phone from "/phone.svg";
import Clock from "/clock.svg";

function Footer() {
    return (
        <footer className="footer">
            <LinkSection />
            <div className="footer-contacts">
                <div className="footer-contact__social">
                    <img src={Logo} alt="Logo" />
                    <div className="footer-contacts__social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://www.viber.com" target="_blank" rel="noopener noreferrer">
                            <img src={Viber} alt="Viber" />
                        </a>
                        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                            <img src={Telegram} alt="Telegram" />
                        </a>
                    </div>
                </div>

                <div className="footer-contacts__info-section">
                    <div className="footer-contacts__info">
                        <h4>Гаряча лінія у межах України</h4>
                        <div className="footer-contacts__info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="footer-contacts__icon"
                            />
                            <p className="footer-contacts__text">
                                <a href="tel:+380800301707">0800 301 707</a>
                            </p>
                        </div>
                        <div className="footer-contacts__info-item">
                            <img
                                src={Clock}
                                alt=""
                                className="footer-contacts__icon"
                            />
                            <p className="footer-contacts__text">7.00-23.00</p>
                        </div>
                    </div>
                    <div className="footer-contacts__info">
                        <h4>Для дзвінків з-за кордону</h4>
                        <div className="footer-contacts__info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="footer-contacts__icon"
                            />
                            <p className="footer-contacts__text">
                                <a href="tel:0800301707">0800 301 707</a>
                            </p>

                        </div>
                        <div className="footer-contacts__info-item">
                            <img
                                src={Clock}
                                alt=""
                                className="footer-contacts__icon"
                            />
                            <p className="footer-contacts__text">7.00-23.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <img src={iconPark} alt="" className="" />
                <div className="footer-copyright_text">
                    <span>Goodmeal</span>, 2024. Всі права захищено
                </div>
            </div>
        </footer>
    );
}
export default Footer;
