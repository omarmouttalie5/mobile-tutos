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

/**
 * Displays a dynamic temporary Toast notification
 * @param {string} message - The text message to display
 * @param {string} type - 'success' (green) or 'error' (red)
 */
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    // Automatically remove the toast after 3 seconds (3000 ms)
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Intercept form submission
formCategorie.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Lock the interface and update button state
    setLoadingState(true);

    // 2. Send async request to PHP controller
    fetch('api/controller/CategorieController.php', {
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
        // Replaced alert() with showToast() success feedback
        showToast(data.message || "Catégorie ajoutée avec succès !", 'success');
        formCategorie.reset(); // Reset form fields on success
    })
    .catch(error => {
        console.error("Erreur réseau ou serveur :", error);
        // Replaced alert() with showToast() error feedback
        showToast("Une erreur est survenue lors de l'enregistrement.", 'error');
    })
    .finally(() => {
        // 3. Always unlock the interface whether request succeeded or failed
        setLoadingState(false);
    });
});