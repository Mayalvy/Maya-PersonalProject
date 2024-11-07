import express from 'express'
const app = express()
const port = 3000;
import cookieParser from 'cookie-parser';
import usersRouter from './routes/user/usersRoutes';


app.use(express.static('public'))

app.use('/users',usersRouter);



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
  const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mayalevy20:e0ok6g2sVajOLOhu@cluster0.emeus.mongodb.net/Todo-App').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});