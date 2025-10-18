import './Post.css';

import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import ReactMarkdown from 'react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'paginas/PaginaPadrao';
import { useEffect } from 'react';

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => post.id === Number(parametros.id));
  const tituloId = post ? `post-titulo-${post.id}` : null;

  useEffect(() => {
    if (!tituloId) return;
    const el = document.getElementById(tituloId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus();
    }
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
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
