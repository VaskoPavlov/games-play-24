import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
        <h1><Link className="home" href="/">GamesPlay</Link></h1>
        <nav>
            <Link href="/games">All games</Link>
            <div id="user">
                <Link href="/games/create">Create Game</Link>
                <Link href="/logout">Logout</Link>
            </div>
            <div id="guest">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </nav>
    </header>
    );
}