import styles from './PostModelo.module.css';

export default function PostModelo({ FotoCapa, titulo, children, tituloId }) {
  return (
    <article className={styles.postModeloContainer}>
      {FotoCapa && (
        <div className={styles.fotoCapaWrapper}>
          <img
            className={styles.fotoCapaImg}
            src={FotoCapa}
            alt={`Capa do post ${titulo}`}
            loading='lazy'
            decoding='async'
          />
        </div>
      )}
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
