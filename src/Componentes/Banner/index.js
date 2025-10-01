import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>

        <p className={styles.paragrafo}>
          Boas-vindas ao meu espaço pessoal!<br></br> Eu sou <strong>Lucas Vilela</strong>, desenvolvedor
          apaixonado por tecnologia.<br></br> Aqui compartilho meus aprendizados,
          experiências e dicas do mundo da programação.<br></br> Espero que você
          encontre algo novo e útil por aqui!
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt='Foto do Antônio Evaldo sorrindo'
        />
      </div>
    </div>
  );
}
