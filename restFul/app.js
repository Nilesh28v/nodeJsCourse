const express=require('express')
const app=express()
const mongoose=require('mongoose')
const puppeteer = require('puppeteer')




// require('dotenv/config')
const posts=require('./router/post')
const authRoute=require( './router/auth')
app.use(express.json())
app.use('/api/user',authRoute)
app.use('/posts',posts) 

app.get('/home',(req,res)=>{
    res.send('we are on home')
})

app.get('/pdfDown', async (req, res) => {
    console.log('In the api');

    const browser = await puppeteer.launch(); 
    console.log('browser launched?');
    
    const page = await browser.newPage();
    console.log('new page opend?');
    
    const website_url = 'https://www.google.com/search?q=google+translate&rlz=1C1CHBF_enIN895IN895&oq=goo&aqs=chrome.2.69i57j46i131i199i433i465i512j0i131i433i512j69i65j69i60l2j69i65l2.2826j0j7&sourceid=chrome&ie=UTF-8';
    await page.goto(website_url, { waitUntil: 'networkidle0' });
    console.log('pdf will generate in next process');

    const pdf = await page.pdf({
        path: 'result.pdf',
        // margin: { top: '50px', right: '50px', bottom: '100px', left: '50px' },
        printBackground: true,
        format: 'A4',
    });

    await browser.close();
    console.log('and the End');
})


mongoose.connect("mongodb://localhost:27017/aggreg",()=>{
    console.log('connected to DB');
})
app.listen(3000,()=>{
    console.log('serer started');
})