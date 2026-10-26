const formCategorie = document.getElementById('form-categorie');
const btnSubmit = document.getElementById('btn-submit-form');


function setLoadingState(isLoading) {
    btnSubmit.disabled = isLoading;
    if (isLoading) {
        btnSubmit.textContent = 'Enregistrement...';
    } else {
        btnSubmit.textContent = 'Enregistrer';
    }
}

// Intercept form submission
formCategorie.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Lock the interface and update button state
    setLoadingState(true);

    // 2. Send async request to PHP controller
    fetch('api/controllers/CategorieController.php', {
        method: 'POST',
        body: new FormData(formCategorie)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Succès :", data);
        alert(data.message || "Catégorie ajoutée avec succès !");
        formCategorie.reset(); // Reset form fields on success
    })
    .catch(error => {
        console.error("Erreur réseau ou serveur :", error);
        alert("Une erreur est survenue lors de l'enregistrement.");
    })
    .finally(() => {
        // 3. Always unlock the interface whether request succeeded or failed
        setLoadingState(false);
    });
});