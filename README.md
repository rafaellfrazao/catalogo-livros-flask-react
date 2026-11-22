# Catálogo de Livros

Projeto das duas atividades de revisão AV2: uma API em Python/Flask e uma interface em React/Vite. A API retorna exatamente três livros; a interface consulta esses dados somente após o clique em **Buscar Livros**.

## Requisitos

- Python 3.10 ou superior, com pip.
- Node.js 22.12 ou superior, com npm.
- Internet na primeira instalação das dependências.

## Estrutura

```text
atividade-livros/
├── api-livros/
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
├── frontend-livros/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## 1. Iniciar a API (primeiro terminal)

Abra um terminal na pasta `atividade-livros` e execute no Windows/PowerShell:

```powershell
cd api-livros
python -m venv venv
.\venv\Scripts\python.exe -m pip install -r requirements.txt
.\venv\Scripts\python.exe app.py
```

Usar o executável dentro do ambiente virtual dispensa a ativação e alterações na política de execução do PowerShell.

No Linux/macOS, substitua `.\venv\Scripts\python.exe` por `./venv/bin/python` (e use `python3` para criar o ambiente, se necessário).

Abra http://127.0.0.1:5000/livros no navegador. A resposta é um objeto JSON com a chave `livros` e os campos `id`, `titulo`, `autor` e `ano` em cada registro.

Mantenha esse terminal aberto. A rota `/` não foi criada: use `/livros`.

## 2. Iniciar a interface (segundo terminal)

Abra outro terminal na pasta `atividade-livros`:

```powershell
cd frontend-livros
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente http://127.0.0.1:5173. Clique em **Buscar Livros** para carregar o catálogo.

Se o PowerShell bloquear `npm.ps1`, use `npm.cmd install` e `npm.cmd run dev`.

## Como funciona

1. O Flask cria a aplicação com `Flask(__name__)`.
2. A rota `GET /livros` devolve `jsonify({"livros": livros})`.
3. No React, `onClick` executa `buscarLivros`.
4. `fetch('/api/livros')` passa pelo proxy de desenvolvimento do Vite, que remove `/api` e encaminha a consulta ao Flask na porta 5000. Isso evita bloqueios de CORS nesse ambiente.
5. A função verifica `resposta.ok`, lê `resposta.json()` e salva `dados.livros` no estado com `useState`.
6. `map()` renderiza os livros usando `key={livro.id}`.
7. O carregamento aparece durante a consulta; falhas de rede ou HTTP mostram uma mensagem.

Os livros ficam exclusivamente no backend. O React começa sem dados e não consulta automaticamente ao abrir a página. A interface usa CSS básico, com os livros organizados em uma lista vertical.

## Testes manuais da atividade

- [ ] Acessar `/livros` e confirmar os três livros em JSON.
- [ ] Abrir a interface e confirmar título e botão, sem livros carregados.
- [ ] Clicar no botão e conferir ID, título, autor e ano de cada livro.
- [ ] Confirmar a mensagem de carregamento (use limitação de rede no navegador para observá-la).
- [ ] Parar o Flask com Ctrl+C e clicar novamente: deve aparecer a mensagem de erro e os resultados anteriores devem desaparecer.
- [ ] Reiniciar o Flask e clicar novamente: os livros devem voltar.
- [ ] Conferir a interface em tela pequena.

## Build

```powershell
cd frontend-livros
npm run build
```

O build é gerado em `dist/`. O proxy configurado é exclusivo do servidor de desenvolvimento: para a atividade, execute com `npm run dev`. Publicar a versão de produção exige hospedar o Flask e configurar o encaminhamento `/api` no servidor escolhido.

O Flask usa `debug=True` conforme o enunciado, para desenvolvimento local.

## Entrega no GitHub

Crie um repositório chamado, por exemplo, `catalogo-livros-flask-react`. Envie esta pasta com o código e os arquivos de documentação. O `.gitignore` exclui ambientes virtuais, dependências instaladas e builds.

Inclua `package-lock.json`: ele registra as versões instaladas do frontend. Não envie `venv`, `node_modules` ou apenas capturas de tela. Compartilhe o link acessível do repositório pelo canal indicado pelo professor. Se ele solicitar repositórios separados, envie `api-livros` para o primeiro e `frontend-livros` para o segundo e inclua instruções de integração.
