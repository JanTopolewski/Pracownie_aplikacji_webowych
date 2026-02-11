import styles from "./Navbar.module.scss";
import {Link} from "react-router";

export default function Navbar(){
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.NavbarList}>
                <li>
                    <Link
                        className={styles.NavbarLink}
                        to="/"
                    >
                        Strona główna
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.NavbarLink}
                        to="/post"
                    >
                        Wpisy
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.NavbarLink}
                        to="/categories"
                    >
                        Lista kategorii
                    </Link>
                </li>
            </ul>
        </nav>
    )
}