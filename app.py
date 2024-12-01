from flask import Flask, render_template, jsonify
import random
import json

app = Flask(__name__)

# Cargar recetas desde un archivo JSON
with open("recipes.json") as f:
    RECIPES = json.load(f)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/random-recipe")
def random_recipe():
    recipe = random.choice(RECIPES)
    return jsonify(recipe)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

