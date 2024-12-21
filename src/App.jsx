import CardsSection from "./components/CardsSection";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn/LogIn";

function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="content">
                {/* <LogIn /> */}
                <Cart />
            </main>
            <Footer />

        </div>

    );
}

export default App;
