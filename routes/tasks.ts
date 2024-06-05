import { Router } from "express";

import * as taskHandlers from '../handlers/tasks'

export const taskRoutes = Router();

taskRoutes.get('/', taskHandlers.getAll)
taskRoutes.get('/:task_id', taskHandlers.getById)
taskRoutes.post('/', taskHandlers.create)
taskRoutes.put('/:task_id', taskHandlers.update)
taskRoutes.delete('/:task_id', taskHandlers.remove)