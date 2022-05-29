const express = require('express');
const path = require("path");
const app = express();
// bodyを有効化
app.use(express.urlencoded({extended: false}));
// ルートパスを有効化
app.use(express.static(path.join(__dirname,"public")));

// app.get('/', function (req, res) {
//   res.send('Hello World!!');
// });

app.post('/api/v1/quiz', function (req, res) {
  // formからanswerの値を取得する
  const answer = req.body.answer;
  if(answer === "2"){
    // res.send("great!");
    res.redirect('/correct.html');
  }else {
    // res.send('oh my god...');
    res.redirect('/wrong.html');
  }
});

app.get('/about', function (req, res) {
  console.log(req);
  res.send('about');
});

app.get('/api/v1/user', function (req, res) {
  res.send({
    name:"mike",
    age:30
  });
});

// herokuでのポートを取得、ローカルの場合は3000番
// herokuデプロイにあたりpackage.jsonへengins,startを追記
const PORT = process.env.PORT || 3000;

app.listen(3000,function(){
  console.log("im running")
});