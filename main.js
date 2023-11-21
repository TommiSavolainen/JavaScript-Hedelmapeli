let rahaa = Number(document.getElementById('rahaa').innerText);
let panos = Number(document.getElementById('panos').innerText);
let panos1 = document.getElementById('panos1');
let panos2 = document.getElementById('panos2');
let panos3 = document.getElementById('panos3');
let luukku1 = document.getElementById('luukku1');
let luukku2 = document.getElementById('luukku2');
let luukku3 = document.getElementById('luukku3');
let luukku4 = document.getElementById('luukku4');
let lukitse1 = document.getElementById('lukitse1');
let lukitse2 = document.getElementById('lukitse2');
let lukitse3 = document.getElementById('lukitse3');
let lukitse4 = document.getElementById('lukitse4');
let pelaaMobile = document.getElementById('pelaaMobile');
let pelaa = document.getElementById('pelaa');
let images = ['kirsikka.png', 'paaryna.png', 'meloni.png', 'omena.png', 'seitseman.png'];
let lukittu1 = false;
let lukittu2 = false;
let lukittu3 = false;
let lukittu4 = false;
let voitto = true;
let randomLuku1 = 3;
let randomLuku2 = 1;
let randomLuku3 = 2;
let randomLuku4 = 4;
let voittoTxtMobile = document.getElementById('voittoTxtMobile');
let voittoTxt = document.getElementById('voittoTxt');
let uusiPeli = document.getElementById('uusiPeli');
let uusiPeliMobile = document.getElementById('uusiPeliMobile');
uusiPeliMobile.addEventListener('click', aloitaUusiPeli);
uusiPeli.addEventListener('click', aloitaUusiPeli);
panos1.addEventListener('click', vaihdaPanos1);
panos2.addEventListener('click', vaihdaPanos2);
panos3.addEventListener('click', vaihdaPanos3);
pelaa.addEventListener('click', pelaaPelia);
pelaaMobile.addEventListener('click', pelaaPelia);
lukitse1.addEventListener('click', lukitseVaihtoehto1);
lukitse2.addEventListener('click', lukitseVaihtoehto2);
lukitse3.addEventListener('click', lukitseVaihtoehto3);
lukitse4.addEventListener('click', lukitseVaihtoehto4);
lukitse1.disabled = true;
lukitse2.disabled = true;
lukitse3.disabled = true;
lukitse4.disabled = true;

// aloittaa uuden pelin
function aloitaUusiPeli() {
    location.reload();
}

// ilmaisee mikä vaihtoehto on lukittu
function lukitseVaihtoehto1() {
    if (lukittu1) {
        lukittu1 = false;
        luukku1.style.opacity = '100%';
    } else {
        lukittu1 = true;
        luukku1.style.opacity = '50%';
    }
}
function lukitseVaihtoehto2() {
    if (lukittu2) {
        lukittu2 = false;
        luukku2.style.opacity = '100%';
    } else {
        lukittu2 = true;
        luukku2.style.opacity = '50%';
    }
}
function lukitseVaihtoehto3() {
    if (lukittu3) {
        lukittu3 = false;
        luukku3.style.opacity = '100%';
    } else {
        lukittu3 = true;
        luukku3.style.opacity = '50%';
    }
}
function lukitseVaihtoehto4() {
    if (lukittu4) {
        lukittu4 = false;
        luukku4.style.opacity = '100%';
    } else {
        lukittu4 = true;
        luukku4.style.opacity = '50%';
    }
}

// Vaihdetaan panosta, jos tarpeeksi rahaa
function vaihdaPanos1() {
    panos = 1;
    if (panos <= rahaa) {
        document.getElementById('panos').innerText = 1;
        pelaa.disabled = false;
        pelaaMobile.disabled = false;
    }
}
function vaihdaPanos2() {
    panos = 2;
    if (panos <= rahaa) {
        document.getElementById('panos').innerText = 2;
        pelaa.disabled = false;
        pelaaMobile.disabled = false;
    } else vaihdaPanos1();
}
function vaihdaPanos3() {
    panos = 3;
    if (panos <= rahaa) {
        document.getElementById('panos').innerText = 3;
        pelaa.disabled = false;
        pelaaMobile.disabled = false;
    } else {
        vaihdaPanos2();
    }
}

// Käynnistetään peli, arvotaan satunnaiset kuvat, lisätään animaatiot, lasketaan ja tulostetaan pisteet
// tarkistetaan onko tarpeeksi rahaa
function pelaaPelia() {
    rahaa -= panos;
    document.getElementById('rahaa').innerText = rahaa;
    if (lukittu1 == false) {
        luukku1.classList.add('shake');
    }
    if (lukittu2 == false) {
        luukku2.classList.add('shake');
    }
    if (lukittu3 == false) {
        luukku3.classList.add('shake');
    }
    if (lukittu4 == false) {
        luukku4.classList.add('shake');
    }

    setTimeout(function () {
        luukku1.classList.remove('shake');
        luukku2.classList.remove('shake');
        luukku3.classList.remove('shake');
        luukku4.classList.remove('shake');
        if (lukittu1 == false) {
            randomLuku1 = Math.floor(Math.random() * 5);
            luukku1.setAttribute('src', images[randomLuku1]);
        }
        if (lukittu2 == false) {
            randomLuku2 = Math.floor(Math.random() * 5);
            luukku2.setAttribute('src', images[randomLuku2]);
        }
        if (lukittu3 == false) {
            randomLuku3 = Math.floor(Math.random() * 5);
            luukku3.setAttribute('src', images[randomLuku3]);
        }
        if (lukittu4 == false) {
            randomLuku4 = Math.floor(Math.random() * 5);
            luukku4.setAttribute('src', images[randomLuku4]);
        }
        if (randomLuku1 == 0 && randomLuku2 == 0 && randomLuku3 == 0 && randomLuku4 == 0) {
            rahaa += panos * 3;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 3 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 3 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 == 1 && randomLuku2 == 1 && randomLuku3 == 1 && randomLuku4 == 1) {
            rahaa += panos * 4;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 4 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 4 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 == 2 && randomLuku2 == 2 && randomLuku3 == 2 && randomLuku4 == 2) {
            rahaa += panos * 5;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 5 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 5 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 == 3 && randomLuku2 == 3 && randomLuku3 == 3 && randomLuku4 == 3) {
            rahaa += panos * 6;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 6 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 6 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 == 4 && randomLuku2 == 4 && randomLuku3 == 4 && randomLuku4 == 4) {
            rahaa += panos * 10;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 10 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 10 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 != 4 && randomLuku2 == 4 && randomLuku3 == 4 && randomLuku4 == 4) {
            rahaa += panos * 5;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 5 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 5 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 == 4 && randomLuku2 != 4 && randomLuku3 == 4 && randomLuku4 == 4) {
            rahaa += panos * 5;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 5 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 5 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 == 4 && randomLuku2 == 4 && randomLuku3 != 4 && randomLuku4 == 4) {
            rahaa += panos * 5;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 5 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 5 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (randomLuku1 == 4 && randomLuku2 == 4 && randomLuku3 == 4 && randomLuku4 != 4) {
            rahaa += panos * 5;
            document.getElementById('rahaa').innerText = rahaa;
            voittoTxt.innerText = 'Voitit ' + panos * 5 + '€';
            voittoTxtMobile.innerText = 'Voitit ' + panos * 5 + '€';
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
        } else if (rahaa == 0) {
            voittoTxt.innerText = 'Rahat loppuivat!';
            voittoTxtMobile.innerText = 'Rahat loppuivat!';
            pelaa.disabled = true;
            pelaaMobile.disabled = true;
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
            uusiPeli.style.display = 'inline-block';
            uusiPeliMobile.style.display = 'inline-block';
        } else if (panos > rahaa) {
            voittoTxt.innerText = 'Ei tarpeeksi rahaa! (Pienennä panosta)';
            voittoTxtMobile.innerText = 'Ei tarpeeksi rahaa! (Pienennä panosta)';
            pelaaMobile.disabled = true;
            pelaa.disabled = true;
        } else {
            voitto = false;
            voittoTxt.innerText = 'Ei voittoa!';
            voittoTxtMobile.innerText = 'Ei voittoa!';
            poistaLukitus();
        }
        if (lukittu1 || lukittu2 || lukittu3 || lukittu4) {
            lukitse1.disabled = true;
            lukitse2.disabled = true;
            lukitse3.disabled = true;
            lukitse4.disabled = true;
            lukittu1 = false;
            luukku1.style.opacity = '100%';
            lukittu2 = false;
            luukku2.style.opacity = '100%';
            lukittu3 = false;
            luukku3.style.opacity = '100%';
            lukittu4 = false;
            luukku4.style.opacity = '100%';
        }
    }, 1000);
}
function poistaLukitus() {
    if (voitto == false) {
        lukitse1.disabled = false;
        lukitse2.disabled = false;
        lukitse3.disabled = false;
        lukitse4.disabled = false;
    } else if (voitto == true) {
        lukitse1.disabled = true;
        lukitse2.disabled = true;
        lukitse3.disabled = true;
        lukitse4.disabled = true;
    }
}
