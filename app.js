const express = require('express')
const app = express()
 const {items}= require('./data')
const cors = require('cors')
app.use(cors())
 app.use(express.json());
 app.use(express.urlencoded());
//app.use(express.static('public'));
//app.get('/api/v1/items',(req,res)=>{
 //   res.sendFile( __dirname + '/public/Details.html');
  //  return res.redirect('Details.html');
//})
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/v1/items">products</a>')
    
})
app.get('/api/v1/items',(req,res)=>{
        const newItems = items.map((item)=>{
        const {id,name,img,price,desc}=item
        return{id,name,img,price,desc}
        //return {name}
            
      })
      res.json(newItems)
      //console.log(newItems)
      //res.send(newItems)
     
 })
//console.log(newItem)

// app.get('/api/items',(req,res)=>{
//     res.json(items)
//       })
app.listen(5000,()=>{
    console.log('server is listening at port 5000...')
})