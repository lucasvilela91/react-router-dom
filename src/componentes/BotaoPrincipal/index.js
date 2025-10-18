import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({
  children,
  tamanho,
  className = '',
  ...rest
}) {
  const tamanhoClass = tamanho ? styles[tamanho] : '';
  return (
    <button
      className={`${styles.botaoPrincipal} ${tamanhoClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
