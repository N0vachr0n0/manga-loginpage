from flask import Flask, request, jsonify

app = Flask(__name__)

# Identifiants prédéfinis
VALID_EMAIL = "shigaraki@mha.xy"
VALID_PASSWORD = "admin"

@app.route('/api/login', methods=['POST'])
def login():
    # Récupération des données JSON de la requête
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Vérification des identifiants
    if email == VALID_EMAIL and password == VALID_PASSWORD:
        return jsonify({"message": "Connexion réussie"}), 200
    else:
        return jsonify({"message": "Identifiants invalides"}), 401

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return "Ah tchaiiiiiss !", 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
