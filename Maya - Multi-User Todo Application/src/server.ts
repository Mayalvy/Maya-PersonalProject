import express from 'express'
const app = express()
const port = 3000;
import cookieParser from 'cookie-parser';
import usersRouter from './routes/user/usersRoutes';
import todoRouter from './routes/todo/todoRoutes';
import dotenv from 'dotenv';

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(express.static('public'))

app.use('/user',usersRouter);
app.use('/todo', todoRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  //middlewares
  app.use(express.json());
  app.use(cookieParser());



  app.get('/', (req:any, res:any) => {
    res.send('Hello World!')
  })

  //connection to db
  const DB_URL = process.env.DB_URL 
  const mongoose = require('mongoose');
mongoose.connect(DB_URL).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});