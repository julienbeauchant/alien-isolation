const clickBtnPositionPlusPc = document.querySelector(`.btnPositionPlusPc`)
const clickBtnPositionPlusPs4 = document.querySelector(`.btnPositionPlusPs4`)
const clickBtnPositionPlusXbox = document.querySelector(`.btnPositionPlusXbox`)
const clickPositionCroixImg = document.querySelector(`.positionCroixImg`)
const panier = document.querySelector(`.panier`)

clickBtnPositionPlusPc.addEventListener('click', () => {
    panier.style.display = 'flex';
});

clickBtnPositionPlusPs4.addEventListener('click', () => {
    panier.style.display = 'flex';
});

clickBtnPositionPlusXbox.addEventListener('click', () => {
    panier.style.display = 'flex';
});

clickPositionCroixImg.addEventListener('click', () => {
    panier.style.display = 'none';
});