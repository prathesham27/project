const express = require ('express');
const app = express()

function vote(req, res){
  res.send("you can vote for your fav here!")
}
app.get('/vote/fav',vote)
app.listen(3000)
console.log('sucess');
