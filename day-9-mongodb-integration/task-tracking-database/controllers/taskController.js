const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {

    try {

        const newTask = await Task.create(req.body);

        res.status(201).json({
            message: "Task Created Successfully",
            task: newTask
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Tasks
const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find();

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    createTask,
    getTasks
};