import styles from './styles.module.css'


export function Footer() {
    return(
        <footer className={styles.footer}>
            <a href="">Entenda como funciona a técnica pomodoro</a>
            <span>Copyright &copy; {new Date().getFullYear()} Pomodoro Flow | Pomodoro feito com 🍅 por você</span>
        </footer>
    );
}