const isEventFinished = true; // Définis cela selon ta condition
const menuItems = [
    { id: "01", label: 'Accueil', href: 'https://alert4sud.fr' },
    { id: "02", label: 'Les vainqueurs du Hackathon', href: 'https://alert4sud.fr/#winners' },
    { id: isEventFinished ? "03" : "02", label: 'Les sujets abordés', href: 'https://alert4sud.fr/#subjects' },
    { id: isEventFinished ? "04" : "03", label: 'Réalisations', href: 'https://alert4sud.fr/#teams' },
    { id: isEventFinished ? "05" : "04", label: 'À propos', href: 'https://alert4sud.fr/#about' },
];

const menuItemsWithoutWinners = menuItems.filter(item => item.label !== 'Les vainqueurs du Hackathon');

const drawer = document.getElementById('drawer');
const menuList = document.getElementById('menuList');
const menuToggle = document.getElementById('menuToggle');
const closeDrawer = document.getElementById('closeDrawer');

// Fonction pour ouvrir/fermer le tiroir
const toggleDrawer = () => {
    drawer.classList.toggle('hidden');
    document.body.classList.toggle('modal-open', !drawer.classList.contains('hidden'));
};

// Remplir le menu
const populateMenu = () => {
    const itemsToDisplay = isEventFinished ? menuItems : menuItemsWithoutWinners;
    itemsToDisplay.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.href}" class="menu-item" onclick="toggleDrawer()"><span class="item-id">${item.id} </span>${item.label}</a>`;
        menuList.appendChild(li);
    });
};



// Écouteurs d'événements
if (menuToggle) {
    menuToggle.addEventListener('click', toggleDrawer);
}
if (closeDrawer) {
    closeDrawer.addEventListener('click', toggleDrawer);
}

// Initialiser le menu
populateMenu();