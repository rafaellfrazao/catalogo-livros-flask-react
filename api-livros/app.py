from flask import Flask, jsonify

app = Flask(__name__)
app.json.ensure_ascii = False

livros = [
    {"id": 1, "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"id": 2, "titulo": "O Cortiço", "autor": "Aluísio Azevedo", "ano": 1890},
    {"id": 3, "titulo": "A Hora da Estrela", "autor": "Clarice Lispector", "ano": 1977},
]


@app.route("/livros", methods=["GET"])
def listar_livros():
    """Retorna os três livros em uma única resposta JSON."""
    return jsonify({"livros": livros})


if __name__ == "__main__":
    app.run(debug=True)
