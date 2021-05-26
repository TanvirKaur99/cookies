var express=require('express');
var cookieparser=require('cookie-parser');

var app=express();

app.use(cookieparser());

app.get('/',function(req,res){
    res.send("Welcome to home page");
})
app.get('/cookie_check',(req,res)=>{

    res.cookie('cookie1','hello');
    res.send('cookie has been sent');

})
app.get('/delete',(req,res)=>{
    res.clearCookie('cookie1').send('cookie has been deleted')
})
app.listen(3000,(err)=>{
    if(err){
        console.log("error occurs" +err);
    }
    else{
        console.log("server running on http://localhost:3000");
    }
});