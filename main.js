#! /usr/bin/env node
import inquirer from "inquirer";
let todoslist = [];
let condition = true;
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                message: "Select an option you wnat to do =",
                type: "list",
                choices: ["Add task", "Delete task", "Update task", "View todo list", "Exit"]
            }
        ]);
        if (option.choice === "Add task") {
            await addTask();
        }
        else if (option.choice === "Delete task") {
            await deleteTask();
        }
        else if (option.choice === "Update task") {
            await updateTask();
        }
        else if (option.choice === "View todo list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            message: "Enter your new task :",
            type: "input"
        }
    ]);
    todoslist.push(newTask.task);
    console.log(newTask.task);
};
let viewTask = () => {
    console.log("\n Your todo list \n");
    todoslist.forEach((task, index) => {
        console.log(index + 1, task);
    });
    console.log("\n");
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            message: "Enter the 'index no' of the task you want to delete :",
            type: "number",
        }
    ]);
    let deleteTask = todoslist.splice(taskIndex.index - 1, 1);
    console.log(deleteTask);
};
let updateTask = async () => {
    await viewTask();
    let updatetask_index = await inquirer.prompt([
        {
            name: "index",
            message: "Enter the 'index no' of the task you want to update : ",
            type: "number"
        },
        {
            name: "new_task",
            message: "Now enter new task name :",
            type: "input",
        }
    ]);
    todoslist[updatetask_index.index - 1] = updatetask_index.new_task;
    console.log(updatetask_index.index - 1);
};
main();
