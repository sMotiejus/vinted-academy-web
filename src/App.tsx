import {useState} from "react";
import HomePage from "./pages/HomePage.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import NavMenu from "./components/navMenu/NavMenu.tsx";

import './App.css'

function App() {
    const [page, setPage] = useState<string>(window.location.pathname);

    return (
        <div className="App">
            <NavMenu setPage={setPage}/>
            <div className="page-block">
                {page === "/" && <HomePage/>}
                {page === "/favorites" && <FavoritesPage/>}
            </div>
        </div>
    );
}

export default App
