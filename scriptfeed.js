document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('userList');

    // Lista de prenume
    const prenume = ['Paul', 'Edi', 'Ariana', 'Robert', 'Laurentiu', 'Razvan', 'George'];

    // Lista de URL-uri pentru imagini
    const imageUrls = [
        'https://via.placeholder.com/150?text=Paul',
        'https://via.placeholder.com/150?text=Edi',
        'https://via.placeholder.com/150?text=Ariana',
        'https://via.placeholder.com/150?text=Robert',
        'https://via.placeholder.com/150?text=Laurentiu',
        'https://via.placeholder.com/150?text=Razvan',
        'https://via.placeholder.com/150?text=George'
    ];

    // Generează 200 de utilizatori
    for (let i = 0; i < 200; i++) {
        // Creează un utilizator și adaugă-l la listă
        const user = document.createElement('div');
        user.classList.add('user');

        // Generează un nume și o imagine aleatorie pentru obiect
        const randomObjectName = generateRandomObjectName();

        // Creează conținutul utilizatorului
        user.innerHTML = `
            <div class="user-image">
                <img src="${imageUrls[i % imageUrls.length]}" alt="User Image">
            </div>
            <div class="user-details">
                <h3>${prenume[i % prenume.length]}</h3>
                <p>Object: ${randomObjectName}</p>
                <button onclick="wantToTrade()">Vreau să fac schimb</button>
                <button onclick="dontWantToTrade()">Nu vreau să fac schimb</button>
            </div>
        `;

        // Adaugă utilizatorul la listă
        userList.appendChild(user);
    }
});

// Funcție pentru generarea unui nume aleatoriu pentru obiect
function generateRandomObjectName() {
    const objects = ['Telefon', 'Laptop', 'Tabletă', 'Cameră foto', 'Consolă de jocuri', 'Smartwatch', 'Boxe inteligente', 'Drone', 'E-reader', 'Sistem audio'];
    return objects[Math.floor(Math.random() * objects.length)];
}

// Funcție pentru opțiunile de schimb
function wantToTrade() {
    alert('Ai ales să faci schimb cu acest utilizator!');
}

function dontWantToTrade() {
    alert('Ai ales să nu faci schimb cu acest utilizator.');
}
