const clickAjouterPc = document.querySelector(`.ajouterPc`)
const clickAjouterPs4 = document.querySelector(`.ajouterPs4`)
const clickAjouterXbox = document.querySelector(`.ajouterXbox`)
const clickCroix = document.querySelector(`.croix`)
const panier = document.querySelector(`.panier`)

clickAjouterPc.addEventListener('click', () => {
    panier.style.display = 'flex';
});

clickAjouterPs4.addEventListener('click', () => {
    panier.style.display = 'flex';
});

clickAjouterXbox.addEventListener('click', () => {
    panier.style.display = 'flex';
});

clickCroix.addEventListener('click', () => {
    panier.style.display = 'none';
});