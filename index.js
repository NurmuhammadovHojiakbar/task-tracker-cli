#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { log } = require("./logger");

const tasksFilePath = path.join(__dirname, "tasks.json");

function loadTasks() {
  try {
    const tasks = fs.readFileSync(tasksFilePath);
    return JSON.parse(tasks);
  } catch (error) {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

function addTask(description) {
  if (!description) {
    log.red("> You have to provide description");
    return;
  }
  const tasks = loadTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1]?.id + 1 : tasks.length + 1,
    description,
    status: "todo",
    created_at: new Date(),
    updated_at: new Date(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  log.green(`> Task added: ID(${newTask.id})`);
}

function updateTask(id, description) {
  if (!id || !description) {
    log.red("> You have to provide id and description");
    return;
  }
  const tasks = loadTasks();
  const task = tasks.find((task) => task.id == id);
  if (task) {
    task.description = description;
    task.updated_at = new Date();
    saveTasks(tasks);
    log.green(`> Task updated: ID(${id})`);
  } else {
    log.red(`> Task with ID(${id}) is not found`);
  }
}

function updateStatus(id, status) {
  if (!id || !status) {
    log.red("> You have to provide id and status");
    return;
  }
  if (["done", "in-progress", "todo"].includes(status)) {
    const tasks = loadTasks();
    const task = tasks.find((task) => task.id == id);
    if (task) {
      task.status = status;
      task.updated_at = new Date();
      saveTasks(tasks);
      log.green(`> Task status updated: ID(${id})`);
    } else {
      log.red(`> Task with ID(${id}) not found`);
    }
  } else {
    log.red(`> There is no such kind of status(${status})`);
  }
}

function deleteTask(id) {
  if (!id) {
    log.red("> You have to provide id");
    return;
  }
  const tasks = loadTasks();
  const filtered = tasks.filter((task) => task.id != id);
  saveTasks(filtered);
  log.green(`> Task ID(${id}) deleted successfully`);
}

function getTasks(status = null) {
  const tasks = loadTasks();
  let filtered = tasks;
  if (status) {
    filtered = tasks.filter((task) => task.status === status);
  }
  if (filtered.length > 0) {
    console.table(filtered);
  } else {
    log.blue("----- Empty -----");
  }
}

function info() {
  log.white("You can track your tasks with cli using this commands:");
  log.white("");
  log.white("index [command] [option]");
  log.white("");
  log.white("> list [status]             - get and filter your tasks");
  log.white("> add <description>         - add new task ");
  log.white("> update <id> <description> - update task using id");
  log.white("> delete <id>               - delete task using id");
  log.white("> help                      - get help with cli");
}

const [, , command, ...argv] = process.argv;

switch (command) {
  case "list": {
    const status = argv[0];
    getTasks(status);
    break;
  }
  case "add": {
    const description = argv[0];
    addTask(description);
    break;
  }
  case "update": {
    const [id, description] = argv;
    updateTask(id, description);
    break;
  }
  case "status": {
    const [id, status] = argv;
    updateStatus(id, status);
    break;
  }
  case "delete": {
    const id = argv[0];
    deleteTask(id);
    break;
  }
  case "help": {
    info();
    break;
  }

  default: {
    info();
    break;
  }
}
