import inquirer from "inquirer";
let lvl = await inquirer.prompt([
    {
        type: "input",
        name: "level",
        message: "What level do you choose: (1) (2) (3)"
    }
]);
if (lvl.level == 1) {
    let answer = Math.floor(Math.random() * 5);
    for (let i = 0; i < 3; i++) {
        let guess = await inquirer.prompt([
            {
                type: "input",
                name: "number_guess",
                message: "What number do you think it is between 0 and 5 (3 tries)"
            }
        ]);
        if (guess.number_guess == answer) {
            console.log("You Win");
            break;
        }
        else {
            if (i < 2) {
                console.log("Try again");
            }
            else {
                console.log("Lost");
            }
        }
    }
}
if (lvl.level == 2) {
    let answer = Math.floor(Math.random() * 10);
    for (let i = 0; i < 3; i++) {
        let guess = await inquirer.prompt([
            {
                type: "input",
                name: "number_guess",
                message: "What number do you think it is between 0 and 10 (3 tries)"
            }
        ]);
        if (guess.number_guess == answer) {
            console.log("You Win");
            break;
        }
        else {
            if (i < 2) {
                console.log("Try again");
            }
            else {
                console.log("Lost");
            }
        }
    }
}
if (lvl.level == 3) {
    let answer = Math.floor(Math.random() * 10);
    let guess = await inquirer.prompt([
        {
            type: "input",
            name: "number_guess",
            message: "What number do you think it is between 0 and 10 (1 try)"
        }
    ]);
    if (guess.number_guess == answer) {
        console.log("You Win");
    }
    else {
        console.log("Lost");
    }
}
