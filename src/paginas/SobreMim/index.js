import PostModelo from 'componentes/PostModelo';
import fotoSobreMim from 'assets/minha_foto.jpg';
import styles from './SobreMim.module.css';

export default function SobreMim() {
  return (
    <PostModelo titulo='Sobre mim'>
      <h3 className={styles.subtitulo}>
        🎓 Cursando Engenharia da Computação - Bacharelado | Apaixonado por
        programação e design
      </h3>

      <img
        src={fotoSobreMim}
        alt='Foto de Lucas Vilela'
        className={styles.fotoSobreMim}
        loading='lazy'
        decoding='async'
      />

      <p className={styles.paragrafo}>
        Desde criança, a tecnologia sempre me fascinou. Meu primeiro contato foi
        com videogames, onde passei horas explorando mundos no Super Mario
        World. Antes de mergulhar na programação, desenvolvi uma paixão pelo
        design, explorando tipografia, teoria das cores e os princípios de
        UX/UI. Essa experiência me permite criar interfaces que unem
        funcionalidade e estética de forma intuitiva e envolvente.
      </p>

      <h4 className={styles.secaoTitulo}>💻 Desenvolvedor Full-Stack</h4>

      <p className={styles.paragrafo}>
        Sou desenvolvedor full-stack, com foco principal no front-end,
        especializado em JavaScript e estilização com CSS e Tailwind. Tenho
        experiência com várias tecnologias e frameworks, incluindo:
      </p>

      <ul className={styles.listaSkills}>
        <li>
          🔹 <strong>Front-End:</strong> Tailwind | JavaScript | TypeScript |
          React.js
        </li>
        <li>
          🔹 <strong>Back-End:</strong> Node.js
        </li>
        <li>
          🔹 <strong>Mobile:</strong> Swift
        </li>
        <li>
          🔹 <strong>Banco de Dados:</strong> MySQL | MongoDB
        </li>
        <li>
          🔹 <strong>Versionamento:</strong> Git
        </li>
      </ul>

      <p className={styles.paragrafo}>
        <strong>🎯 Diferenciais:</strong> Minha formação em Educação Física me
        ajudou a desenvolver habilidades como trabalho em equipe, empatia e
        comunicação, fundamentais no desenvolvimento de soluções tecnológicas
        que atendem de forma eficaz as necessidades dos usuários.
      </p>

      <p className={styles.paragrafo}>
        <strong>🎮 Além da tecnologia:</strong> Nos momentos livres, adoro jogar
        videogames, treinar musculação e aprender algo novo. Acredito que o
        equilíbrio entre trabalho e hobbies é essencial para manter a
        criatividade e o foco no dia a dia.
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
          💻 <strong>GitHub:</strong>{' '}
          <a
            href='https://github.com/lucasvilela91'
            target='_blank'
            rel='noopener noreferrer'
          >
            github.com/lucasvilela91
          </a>
        </p>
      </div>
    </PostModelo>
  );
}
