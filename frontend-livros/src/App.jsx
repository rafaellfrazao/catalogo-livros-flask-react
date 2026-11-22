import { useState } from 'react'

export default function App() {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const resposta = await fetch('/api/livros')

      if (!resposta.ok) {
        throw new Error('Erro ao consultar a API')
      }

      const dados = await resposta.json()
      setLivros(dados.livros)
    } catch {
      setErro('Não foi possível buscar os livros. Verifique se a API está ligada.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <p>Clique no botão para consultar os livros.</p>

      <button onClick={buscarLivros} disabled={carregando}>
        Buscar Livros
      </button>

      {carregando && <p role="status">Carregando livros...</p>}
      {erro && <p className="erro" role="alert">{erro}</p>}

      {livros.map((livro) => (
        <div className="livro" key={livro.id}>
          <h2>{livro.titulo}</h2>
          <p>ID: {livro.id}</p>
          <p>Autor: {livro.autor}</p>
          <p>Ano: {livro.ano}</p>
        </div>
      ))}
    </main>
  )
}
