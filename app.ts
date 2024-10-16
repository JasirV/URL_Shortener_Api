import express,{Express} from 'express';
import bodyParse from 'body-parser'
import urlRouters from './routers/urlRouters';
import cors from 'cors'

const app:Express = express();
app.use(cors())
app.use(bodyParse.json())
app.use(express.json())

app.use('/api',urlRouters)



export default app;