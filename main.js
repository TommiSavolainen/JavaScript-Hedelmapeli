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
let pelaa = document.getElementById('pelaa');
panos1.addEventListener('click', vaihdaPanos1);
panos2.addEventListener('click', vaihdaPanos2);
panos3.addEventListener('click', vaihdaPanos3);
pelaa.addEventListener('click', pelaaPelia);

function vaihdaPanos1() {
    panos = 1;
    document.getElementById('panos').innerText = 1;
}
function vaihdaPanos2() {
    panos = 2;
    document.getElementById('panos').innerText = 2;
}
function vaihdaPanos3() {
    panos = 3;
    document.getElementById('panos').innerText = 3;
}
function pelaaPelia() {
    rahaa -= panos;
    document.getElementById('rahaa').innerText = rahaa;
}
console.log(panos);
