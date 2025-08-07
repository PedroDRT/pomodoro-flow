import styles from './styles.module.css'
import logotipo from '../../assets/logo-pomodoro-flow.png'

export function Logo() {
    
    return(
        <div className={styles.logo}>
            <img src={logotipo} alt="Logo" />
        </div>
    )
}