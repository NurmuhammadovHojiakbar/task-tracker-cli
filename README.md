# TaskTrackerCLI
Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

TaskTrackerCLI is a command-line tool for managing tasks, written in JavaScript. It allows users to easily create, list, update, and delete tasks.

## Installation

To use TaskTrackerCLI, first, clone the repository. After that, you can use the npm link command to make the task-cli command available globally on your system.

```bash
git clone https://github.com/NurmuhammadovHojiakbar/task-tracker-cli
cd task-tracker-cli
npm link
```

## Usage

### List all tasks

To list all tasks, you can use the following command. If the database does not exist, it will be created automatically.

```bash
task-cli list
```
This command will return all stored tasks. If you want to filter the tasks by status, you can use one of the following optional filters: done, todo, in-progress.

```bash
task-cli list {filter}
```

#### Example:

- To list all pending tasks (todo):
```bash
task-cli list todo
```

- To list all tasks in progress (in-progress):
```bash
task-cli list in-progress
```

- To list all completed tasks (done):
```bash
task-cli list done
```

### Create a task
To create a new task, use the add command followed by the task description in quotes.

```bash
task-cli add "Task description"
```

### Update a task
To update the description of an existing task, use the update command followed by the task ID and the new description.

```bash
task-cli update "ID" "New task description"
```
### Update task status
To change the status of a task to "in progress" or "done" use the following command:

```bash
task-cli status "ID" "in-progress"
```

### Delete a task
To delete a task, use the following command with the task ID:

```bash
task-cli delete "ID"
```
