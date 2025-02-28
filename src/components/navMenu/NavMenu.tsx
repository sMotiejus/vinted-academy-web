import './NavMenu.css';
import {useEffect} from "react";

const logo = '/vinted_logo.svg';

interface NavMenuProps {
    setPage: (page: string) => void;
}

const NavMenu = ({setPage}: NavMenuProps) => {
    useEffect(() => {
        const onPopState = () => setPage(window.location.pathname);
        window.addEventListener("popstate", onPopState);

        return () => window.removeEventListener("popstate", onPopState);
    }, [setPage]);

    const navigate = (path: string) => {
        window.history.pushState({}, "", path);
        setPage(path);
    };

    return (
        <div className="nav-menu">
            <img src={logo} alt="Vinted logo"/>
            <nav className="nav-links">
                <div className={'link'} onClick={() => navigate("/")}>Home</div>
                <b>|</b>
                <div className={'link'} onClick={() => navigate("/favorites")}>Favorites</div>
            </nav>
        </div>

    );
};

export default NavMenu;