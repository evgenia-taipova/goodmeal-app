import LinkSection from "./LinkSection";
import iconPark from "../../public/icon-park-outline_handle-c.svg";
import Logo from "../../public/logo.svg";
import Facebook from "../../public/facebook.svg";
import Instagram from "../../public/instagram.svg";
import Viber from "../../public/viber.svg";
import Telegram from "../../public/telegram.svg";
import Phone from "../../public/phone.svg";
import Clock from "../../public/clock.svg";

function Footer() {
  return (
    <footer className="footer">
      <LinkSection />
      <div className="footer-contacts">
        <div className="footer-contact__social">
          <img src={Logo} alt="Logo" />
          <div className="footer-contacts__social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Viber} alt="Viber" />
            <img src={Telegram} alt="Telegram" />
          </div>
        </div>

        <div className="footer-contacts__info-section">
          <div className="footer-contacts__info">
            <h4>Гаряча лінія у межах України</h4>
            <div className="footer-contacts__info-item">
              <img src={Phone} alt="" className="footer-contacts__icon" />
              <p className="footer-contacts__text">0800 301 707</p>
            </div>
            <div className="footer-contacts__info-item">
              <img src={Clock} alt="" className="footer-contacts__icon" />
              <p className="footer-contacts__text">7.00-23.00</p>
            </div>
          </div>
          <div className="footer-contacts__info">
            <h4>Для дзвінків з-за кордону</h4>
            <div className="footer-contacts__info-item">
              <img src={Phone} alt="" className="footer-contacts__icon" />
              <p className="footer-contacts__text">0800 301 707</p>
            </div>
            <div className="footer-contacts__info-item">
              <img src={Clock} alt="" className="footer-contacts__icon" />
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
