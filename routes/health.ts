import { Router } from "express";

export const healthRoutes = Router();

healthRoutes.get('/', (req, res)=>{
    res.sendStatus(200);
})

healthRoutes.get('/ping', (req, res)=>{
    res.send("pong");
})

