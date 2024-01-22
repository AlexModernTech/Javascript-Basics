function change() {
    document.getElementById("Main").innerHTML = "Nah... Bait you :)";
}

function check() {
    let age = prompt("How old are you?", '');
    let isAdult = (age <= 18) ? "You are still young" : 
    (age <= 40) ? "You are an adult!" :
    (age <= 100) ? "You are pretty old :)" :
    (age > 100) ? "Nice joke (nope) :-0 " : "Try again" ;

    alert(isAdult);

}