import type { RequestHandler } from "express";


import { Task } from "../models/task";

export const getAll: RequestHandler = async (req, res, next) => {
    try {
        const tasks = await Task.findAll();
        res.json({ tasks })
    } catch (error) {
        console.error("Error while fetching all tasks: ", error);
        res.sendStatus(500).json({ error })
    };
}

export const getById: RequestHandler = async (req, res, next) => {
    const taskId = req.params.task_id
    if (!taskId) res.status(400).json(new Error('"task_id" param not found'))
    try {
        const task = await Task.findByPk(taskId);
        if (!task) return res.status(404).json(new Error('Task not found'))
        res.json({ task })
    } catch (error) {
        console.error("Error while fetching task: ", error);
        res.sendStatus(500).json({ error })
    };
}

export const create: RequestHandler = async (req, res, next) => {
    const taskBody = req.body;

    try {
        const task = await Task.create(taskBody);
        res.status(201).json({ task })
    } catch (error) {
        console.error("Error while creating user: ", error);
        res.status(500).json({ error })
    };
}

export const update: RequestHandler = async (req, res, next) => {
    const taskId = req.params.task_id
    const taskBody = req.body;

    try {
        let task = await Task.findByPk(taskId);
        if (!task) return res.status(404).json(new Error('Task not found'))
        task.name = taskBody.name;
        task.description = taskBody.description;
        task.amount = taskBody.amount;
        task.purchased = taskBody.purchased;
        task?.save()
        res.status(200).json({ task })
    } catch (error) {
        console.error("Error while updating task: ", error);
        res.status(500).json({ error })
    };
}

export const remove: RequestHandler = async (req, res, next) => {
    const taskId = req.params.task_id

    try {
        const task = await Task.findByPk(taskId);
        if (!task) return res.status(404).json(new Error('Task not found'))
        task?.destroy()
        res.status(201).json({ task })
    } catch (error) {
        console.error("Error while deleting user: ", error);
        res.status(500).json({ error })
    };
}