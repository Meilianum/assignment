import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosQuestion = await inquirer.prompt([
        {
            name: 'firstQuestion',
            type: "input",
            message: "what whould like you to add in you todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: 'whould you like to add more in your todos?',
            default: "true"
        },
    ]);
    todos.push(todosQuestion.firstQuestion);
    console.log(todos);
    condition = (todosQuestion.secondQuestion);
}
