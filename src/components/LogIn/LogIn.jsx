const LogIn = () => {
    return (
        <section className="login">
            <div className="login__frame">

                <div className="login__inner">
                    <div className="login__top">
                        <h1>Вхід</h1>
                        <p>Єдиний аккаунт користувачів "Goodmeal"</p>
                    </div>
                    <form>
                        <div className="login__form-field">
                            <p className="login__form-text">Вкажіть ваше ім’я</p>
                            <input className="login__form-input" type="text" placeholder="Ім'я" required />
                        </div>
                        <div className="login__form-field">
                            <p className="login__form-text">Вкажіть ваш номер телефону</p>
                            <input className="login__form-input" type="tel" placeholder="Номер телефону" required />
                        </div>
                        <p className="login__form-rules">
                            Продовжуючи, ви погоджуєтесь з <a href="#">Політикою конфіденційності</a> та <a href="#">Правилами використання</a> Програми "Goodmeal"
                        </p>
                        <div className="login__form-btn">
                            <button type="submit">Увійти</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LogIn;