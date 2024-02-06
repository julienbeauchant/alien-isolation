class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
  
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
  
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
  
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  
    update() {
      let output = '';
      let complete = 0;
  
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
  
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
  
      this.el.innerHTML = output;
  
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  
  // Example
  const phrases = [
    'ALIEN',
    'ISOLATION'
  ];
  
  const el1 = document.querySelector('.firstH1');
  const fx1 = new TextScramble(el1);
  
  const el2 = document.querySelector('.secondH1');
  const fx2 = new TextScramble(el2);
  
  let counter = 0;
  
  const next = () => {
    fx1.setText(phrases[counter]).then(() => {
      setTimeout(() => {
        fx2.setText(phrases[counter]);
      }, 800);
    });
    counter = (counter + 1) % phrases.length;
  };
  
  next();



// NAVBAR --------------------------------------------------------------

const clickAccueil = document.querySelectorAll(`.accueil`)
const accueilBackground = document.querySelector(`#accueilBackground`)
const main = document.querySelector(`main`)
const footer = document.querySelector(`.footer`)

// clickAccueil.addEventListener(`click`, () => {
//   accueilBackground.style.display = 'flex';
//   main.style.display = 'flex';
//   footer.style.display = 'flex';
//   contactBackground.style.display = 'none';
//   boutiqueBackground.style.display = 'none';
//   console.log('Clic sur Accueil');
// })

clickAccueil.forEach(element => {
  element.addEventListener('click', () => {
    accueilBackground.style.display = 'flex';
    main.style.display = 'flex';
    footer.style.display = 'flex';
    contactBackground.style.display = 'none';
    boutiqueBackground.style.display = 'none';
    console.log('Clic sur Accueil');
  });
});

const clickContact = document.querySelectorAll(`.contact`)
const contactBackground = document.querySelector(`#contactBackground`)

// clickContact.addEventListener(`click`, () => {
//   contactBackground.style.display = 'flex';
//   accueilBackground.style.display = 'none';
//   main.style.display = 'none';
//   footer.style.display = 'none';
//   boutiqueBackground.style.display = 'none';
//   console.log('Clic sur Contact');
// })

clickContact.forEach(element => {
  element.addEventListener('click', () => {
  contactBackground.style.display = 'flex';
  accueilBackground.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'none';
  boutiqueBackground.style.display = 'none';
  console.log('Clic sur Contact');
  });
});

const clickBoutique = document.querySelectorAll(`.boutique`)
const boutiqueBackground = document.querySelector(`#boutiqueBackground`)

// clickBoutique.addEventListener(`click`, () => {
//   boutiqueBackground.style.display = 'flex';
//   contactBackground.style.display = 'none';
//   accueilBackground.style.display = 'none';
//   main.style.display = 'none';
//   footer.style.display = 'none';
//   console.log('Clic sur Boutique');
// })

clickBoutique.forEach(element => {
  element.addEventListener('click', () => {
  boutiqueBackground.style.display = 'flex';
  contactBackground.style.display = 'none';
  accueilBackground.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'none';
  console.log('Clic sur Boutique');
  });
});

const menuIcon = document.querySelector(`#menuIcon`)
const menu = document.querySelector(`#menu`)

menuIcon.addEventListener('click', () => {
  menu.style.display = 'flex';
  menuIcon.src = "img/croix.png"
});

