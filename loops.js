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

function even_numbers() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
        else{
            console.log("Not even...")
        }
    }
}

function from_for_to_while() {
    for (let i = 0; i < 3; i++) {
        console.log( `число ${i}!` );
      }

    let i = 0;
    while (i < 3) {
        console.log(`число ${i}!`);
        i++;
    }
}

function until_correct() {
        
   loop_breakout : while(true){
            let value = prompt("Choose a number bigger then 100");
            if (Number(value) <= 100) {
                continue;
            }
            else {
                console.log(value);
                break loop_breakout;
            }
        }
}

function simple_numbers() {
    let n = 10;

    nextPrime:
        for (let i = 2; i <= n; i++) { // для кожного i...

        for (let j = 2; j < i; j++) { // шукаємо дільник..
            if (i % j == 0) continue nextPrime; // не просте, беремо наступне i
        }

        alert( i ); // просте число
        }

}