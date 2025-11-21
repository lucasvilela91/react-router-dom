import PostModelo from 'componentes/PostModelo';
import fotoSobreMim from 'assets/minha_foto.jpg';
import styles from './SobreMim.module.css';

export default function SobreMim() {
  return (
    <PostModelo titulo='Sobre mim'>
      <h3 className={styles.subtitulo}>🎓 Cursando Engenharia da Computação</h3>

      <img
        src={fotoSobreMim}
        alt='Foto de Lucas Vilela'
        className={styles.fotoSobreMim}
        loading='lazy'
        decoding='async'
      />

      <p className={styles.paragrafo}>
        Tenho interesse contínuo em desenvolvimento de software, com foco em
        front-end e um olhar atento à experiência do usuário. Atualmente, estou
        expandindo meus conhecimentos em back-end para me tornar um
        desenvolvedor mais completo e versátil.
      </p>
      <p className={styles.paragrafo}>
        Atuo na CI&T, uma multinacional de tecnologia reconhecida globalmente,
        onde iniciei minha trajetória através do programa de estágio NEXT GEN IA
        EDITION. Essa oportunidade tem sido essencial para meu crescimento
        técnico e profissional, permitindo que eu participe de projetos
        desafiadores e colaborativos em um ambiente de inovação constante.
      </p>
      <p className={styles.paragrafo}>
        Acredito na importância de escrever código limpo, escalável e alinhado
        às boas práticas de desenvolvimento. Estou sempre em busca de aprender
        novas tecnologias, aprimorar minhas habilidades e contribuir com
        soluções que façam a diferença.
      </p>

      <h4 className={styles.secaoTitulo}>💻 Hard skills</h4>

      <p className={styles.paragrafo}>
        Typescript | React.js | Next.js | Node.js | Git | PostgreSQL | MySQL |
        MongoDB
      </p>

      <h4 className={styles.secaoTitulo}>🎮 Além da tecnologia</h4>
      <p className={styles.paragrafo}>
        Nos momentos livres, adoro jogar videogames, treinar musculação e
        aprender algo novo. Acredito que o equilíbrio entre trabalho e hobbies é
        essencial para manter a criatividade e o foco no dia a dia.
      </p>

      <div className={styles.contato}>
        <p className={styles.paragrafo}>
          🌐 <strong>Site:</strong>{' '}
          <a
            href='https://lucasvilela.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            lucasvilela.vercel.app
          </a>
          <br />
          📧 <strong>E-mail:</strong>{' '}
          <a href='mailto:lucasvilelapersonal@gmail.com'>
            lucasvilelapersonal@gmail.com
          </a>
          <br />
        </p>
      </div>
    </PostModelo>
  );
}
