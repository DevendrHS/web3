const tasks = require("../data/tasks");

// Submit Task
const submitTask = (req, res) => {

    const { title, student, status } = req.body;

    const newTask = {
        id: tasks.length + 1,
        title,
        student,
        status
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task Submitted Successfully",
        task: newTask
    });
};

// Get All Tasks
const getTasks = (req, res) => {

    res.status(200).json(tasks);

};

module.exports = {
    submitTask,
    getTasks
};