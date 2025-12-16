import {NavLink} from "react-router"

export function NavBar(){
    return (
        <nav>
            <NavLink to="/" end>Strona główna</NavLink> {" "} | {" "}
            <NavLink to="/about" end>O nas</NavLink> {" "} | {" "}
            <NavLink to="/contact" end>Kontakt</NavLink> {" "} | {" "}
            <NavLink to="/offer" end>Nasza oferta</NavLink> {" "} | {" "}
        </nav>
    );
}