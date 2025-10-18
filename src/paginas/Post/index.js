import './Post.css';

import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import ReactMarkdown from 'react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'paginas/PaginaPadrao';
import { useEffect } from 'react';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function Post() {
  const parametros = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === Number(parametros.id));
  const tituloId = post ? `post-titulo-${post.id}` : null;

  useEffect(() => {
    if (!tituloId) return;
    window.scrollTo({ top: 680, left: 0 });
  }, [tituloId]);

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              FotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
              tituloId={tituloId}
            >
              <div className='post-markdown-container'>
                <ReactMarkdown
                  components={{
                    img: ({ node, ...props }) => {
                      const { alt = '' } = props;
                      return (
                        <img
                          {...props}
                          alt={alt}
                          loading='lazy'
                          decoding='async'
                          style={{ maxWidth: '100%' }}
                        />
                      );
                    },
                  }}
                >
                  {post.texto}
                </ReactMarkdown>

                <div style={{ marginTop: 24 }}>
                  <BotaoPrincipal
                    onClick={() => navigate(-1)}
                    tamanho='pequeno'
                  >
                    Voltar
                  </BotaoPrincipal>
                </div>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
