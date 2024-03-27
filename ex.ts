import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 200420;

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code !!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["Withdraw", "Check balance"]
            }
        ]);

        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Select the amount you would like to withdraw",
                    type: "list",
                    choices: [5000, 2000, 1000, 6000]
                }
            ]);

            let amountToWithdraw = amountAns.amount;

            if (amountToWithdraw > myBalance) {
                console.log("Insufficient funds. Please select a lower amount or check your balance.");
            } else {
                myBalance -= amountToWithdraw;
                console.log(`Successfully withdrew ${amountToWithdraw}. Your new balance is ${myBalance}`);
            }
        } else {
            console.log(`Your balance is ${myBalance}`);
        }
    } else {
        console.log("Incorrect pin number");
    }

