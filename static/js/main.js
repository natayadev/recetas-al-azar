document.getElementById("sort-recipe").addEventListener("click", () => {
    fetch("/random-recipe")
        .then((response) => response.json())
        .then((data) => {
            const recipeDiv = document.getElementById("recipe-display");
            recipeDiv.innerHTML = `
                <h2>${data.name}</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    ${data.ingredients.map((ing) => `<li>${ing}</li>`).join("")}
                </ul>
                <h3>Instrucciones:</h3>
                <p>${data.instructions}</p>
            `;
        })
        .catch((error) => {
            console.error("Error fetching recipe:", error);
        });
});
