var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Lamp aanzetten';
document.body.appendChild(btn);
document.body.style.backgroundColor = 'black';

//schrijf hier je code
btn.onclick = function() {LampOnOff()}

function LampOnOff() {
    if (btn.innerHTML == "Lamp uitzetten") {
        btn.innerHTML = "Lamp aanzetten" 
        document.body.style.backgroundColor = "black";
        console.log("Lamp uitzetten")
    } else { 
        btn.innerHTML = "Lamp uitzetten";
        document.body.style.backgroundColor = 'yellow'
        console.log("Lamp aangezet")
        }   
}
