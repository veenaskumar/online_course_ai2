const express=require('express');
const app= express();
const cors=require('cors')
const router=require('./route/route')
const user=require('./route/userroute')
// const user=require('./route/adminroute')
const register=require('./route/register')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.send('login');
})

app.get('/signup',(req,res)=>{
    res.send('signup');
})

app.use('/api/lectures',router);
app.use('/api/auth',user);
app.use('/api/register',register);

app.listen(3002,()=>{
    console.log('server running on port 3002....');
});