import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Bem-vindo ao meu mundo React</h1>

        <p className={styles.paragrafo}>
          Eu sou <strong>Lucas Vilela</strong>, estagiário mergulhando de cabeça
          no React. Aqui no blog, compartilho posts práticos com meus
          aprendizados e dicas valiosas.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt=""
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt='Foto do Lucas Vilela'
        />
      </div>
    </div>
  );
}
