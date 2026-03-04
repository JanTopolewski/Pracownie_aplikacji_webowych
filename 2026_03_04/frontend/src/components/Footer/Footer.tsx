import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            Autor: Jan Topolewski | ZSK | {new Date().getDate()}
        </footer>
    )
}