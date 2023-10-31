import inquirer from "inquirer";
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "Select",
            message: "Please selec tan operation",
            choices: ["Add", "Update", "View", "Delete"]
        });
        if (ans.Select === "Add") {
            let addIn = await inquirer.prompt({
                type: "input",
                name: "Additem",
                message: "Please add the item in the list:"
            });
            todos.push(addIn.Additem);
            console.log(todos);
        }
        if (ans.Select === "Update") {
            let updateItem = await inquirer.prompt({
                type: "list",
                message: "Select the item you want to update:",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addIn = await inquirer.prompt({
                type: "input",
                message: "Please add item to the list:",
                name: "Additem"
            });
            let newTodos = todos.filter(val => val !== updateItem.todo);
            todos = [...newTodos, addIn.Additem];
            console.log(todos);
        }
        if (ans.Select === "View") {
            console.log(todos);
        }
        if (ans.Select === "Delete") {
            let deleteItem = await inquirer.prompt({
                type: "list",
                message: "Select the item you want to delete:",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteItem.todo);
            todos = [...newTodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
