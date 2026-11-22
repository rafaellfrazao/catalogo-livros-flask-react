# API de Livros com Flask

API da primeira atividade AV2. Retorna três livros com identificador, título, autor e ano de publicação. Os registros ficam em uma lista Python; não há banco de dados.

## Executar no Windows

No terminal, dentro desta pasta:

```powershell
python -m venv venv
.\venv\Scripts\python.exe -m pip install -r requirements.txt
.\venv\Scripts\python.exe app.py
```

No Linux/macOS, use `python3 -m venv venv` e `./venv/bin/python` nos comandos seguintes.

## Consultar

Método: **GET**. Endereço: http://127.0.0.1:5000/livros

Formato da resposta:

```json
{
  "livros": [
    {"id": 1, "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"id": 2, "titulo": "O Cortiço", "autor": "Aluísio Azevedo", "ano": 1890},
    {"id": 3, "titulo": "A Hora da Estrela", "autor": "Clarice Lispector", "ano": 1977}
  ]
}
```

A interface React e as instruções completas de integração estão na pasta superior. Mantenha a API rodando durante a consulta pela interface.
