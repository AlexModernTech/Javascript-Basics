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

function age_checker() {
    let age_val = prompt("How old are you?", '');
    if (age_val >= 14 && age_val <= 90) {
        alert("You are old enough :)");
    }
    if (age_val < 14 || age_val > 90) {
        alert("Come back next time :)");
    }
}

function login() {
    let user = prompt("Who are you?", '');

    if (user == "Admin" || user == "admin") {
        let passw = prompt("Enter your password:", '')

        if (passw == "TheMaster") {
            alert("Welcome, Admin");
        }
        else if (passw == null || passw == '') {
            alert("Canceled");
        }
        else {
            alert("Wrong password");
        }
    }

    else if (user == null || user == '') {
        alert("Canceled");
    }

    else {
        alert("I don't know you");
    }
}

function loop_example() {
    let value = prompt("Choose a value for the loop:", '');
    
    while (value) {
        document.getElementById("text_loop").innerHTML = `You wrote a number, but anyway it will be ${value} because it's loop without time spacing`;
        value--;
    }
}