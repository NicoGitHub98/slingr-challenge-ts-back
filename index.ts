import express from 'express';
import cors from 'cors';
import sqlz from './utils/db';
import routes from './routes'

console.warn("Express initialization")

const app = express();
const port = 8080

app.use(express.json())
app.use(cors())

app.use('/', routes.healthRoutes)
app.use('/tasks', routes.taskRoutes)

sqlz
    .sync()
    .then((result) => {
        console.log("Database connected")
        app.listen(8080 ,()=>{
            console.log(`Server estarted on port: ${port}`)
        })
    })
    .catch((err)=>{
        console.error("Error syncing DB: ",err)
    })

