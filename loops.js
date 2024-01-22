function while_loop() {
    let value = prompt("Choose a value:", '');
    let sum = 0;

    while (value) {
        sum = sum + Number(value);
        value--;
    }

    document.getElementById("text_loop").innerHTML = `The sum of numbers from entered number to 1 is: ${sum}`;
}

function for_loop() {
    let asked = prompt("Do you want to make a infinite cycle?:", '');

    if (asked == "yes" || asked == "Yes") {
        for (;;) {
            console.log("infinite cycle");
        }
    }
    else {
        console.log("As you wish :)");
    }
}

function do_while_loop() {
    let sum = 0;
    let value = prompt("Choose a number: ",'');
    let numb_of_times = prompt("How much times should cycle iterates?", '')
    do {
        sum += Number(value);
        Number(numb_of_times--);
    }
    while (numb_of_times > 0);
    console.log(sum);
}