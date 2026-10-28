const formCategorie = document.getElementById('form-categorie');
const btnSubmit = document.getElementById('btn-submit-form');
const spinnerSubmit = document.getElementById('spinner-submit');
const textSubmit = document.getElementById('text-submit');

function setLoadingState(isLoading) {
    btnSubmit.disabled = isLoading;
    if (isLoading) {
        spinnerSubmit.classList.remove('hidden'); // Show spinner
        textSubmit.textContent = 'Enregistrement...';
    } else {
        spinnerSubmit.classList.add('hidden'); // Hide spinner
        textSubmit.textContent = 'Enregistrer';
    }
}


function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    // Base Tailwind classes for toasts with opacity transition
    let classes = 'text-white px-4 py-3 rounded-lg shadow-lg mb-2 transition-opacity duration-500 font-medium';
    
    // Conditional styling based on result type
    if (type === 'success') {
        classes += ' bg-green-500';
    } else {
        classes += ' bg-red-500';
    }
    
    toast.className = classes;
    toast.textContent = message;

    container.appendChild(toast);

    // Smooth fade out and removal after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500); // Removes element after transition completes
    }, 3000);
}

// Intercept form submission
formCategorie.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Lock the interface, disable button, and show loading spinner
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
        showToast(data.message || "Catégorie ajoutée avec succès !", 'success');
        formCategorie.reset(); // Reset form fields on success
    })
    .catch(error => {
        console.error("Erreur réseau ou serveur :", error);
        showToast("Une erreur est survenue lors de l'enregistrement.", 'error');
    })
    .finally(() => {
        // 3. Unlock interface, hide spinner, and restore button state
        setLoadingState(false);
    });
});