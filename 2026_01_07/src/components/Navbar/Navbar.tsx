import styles from "./Navbar.module.scss"

export default function Navbar(){
    return (
        <nav className={styles.Navbar}>
            <ul>
                <li>
                    <a href="/">Strona główna</a>
                </li>
                <li>
                    <a href="/blogpost">Wpis</a>
                </li>
                <li>
                    <a href="/categories">Lista kategorii</a>
                </li>
            </ul>
        </nav>
    )
}