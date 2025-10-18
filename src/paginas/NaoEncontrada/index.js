import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
  const navegar = useNavigate();



  return (
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>

      <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

      <p className={styles.paragrafo}>
        A página que você está procurando não existe ou foi movida.
      </p>

      <p className={styles.paragrafo}>
        Tente verificar o URL ou volte para a página inicial.
      </p>

      <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
        <BotaoPrincipal tamanho='lg'>Voltar</BotaoPrincipal>
      </div>
      <img
        className={styles.imagemErro}
        src={erro404}
        alt='imagem de erro 404'
        loading='lazy'
        decoding='async'
      />
    </div>
  );
}
