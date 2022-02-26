let light = document.getElementById('turnLight');
let off = document.getElementById('turnOff');
let img = document.getElementById('myImage');
light.addEventListener('click', bulbonOn);
off.addEventListener('click', bulbonOff);
function bulbonOn() {
    img.src = "bulbon.gif"
}
function bulbonOff() {
    img.src = "bulboff.gif"
}