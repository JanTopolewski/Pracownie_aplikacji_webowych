import styles from "./Home.module.scss";

export default function Home(){
    return (
        <div className={styles.Home}>
            <h1>Witaj na moim blogu!</h1><hr/>
            <p>Zachęcam do zostawienia komentarza</p>
        </div>
    )
}