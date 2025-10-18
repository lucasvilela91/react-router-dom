import styles from './PostModelo.module.css';

export default function PostModelo({ FotoCapa, titulo, children, tituloId }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${FotoCapa})` }}
      />
      <h2
        id={tituloId}
        tabIndex={tituloId ? -1 : undefined}
        className={styles.titulo}
      >
        {titulo}
      </h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
}