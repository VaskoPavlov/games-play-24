import GameCreate from "./components/game-create/GameCreate"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

function App() {
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Home />
                <Login />
                <Register />
                <GameCreate />
            </main>
        </div>
    )
}

export default App
