import styles from './styles.module.css'

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'red' | 'blue';
} & React.ComponentProps<'button'>;

export function DefaultButton ({icon, color = 'red', ...props}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}