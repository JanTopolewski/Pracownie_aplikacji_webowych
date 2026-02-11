import styles from "./Home.module.scss";

export default function Home(){
    return (
        <div className={styles.Home}>
            <h1>Witaj na moim blogu!</h1><hr/>
            <p>Zapraszam do zapoznania się ze świetnymi codziennymi informacjami, opiniami i pomysłami związanymi z życiem codziennym oraz światem technologii i sportu. </p>
        </div>
    )
}