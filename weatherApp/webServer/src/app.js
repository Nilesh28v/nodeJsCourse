const path=require('path')
const express=require('express')
const app=express();
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const partialPath=path.join(__dirname,'../templates/partials')
const publicDirectoryPath= path.join(__dirname,'../public');
   
app.set('views', path .join(__dirname, '../templates/views'));
app.set('view engine', 'hbs');
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

// app.get('',(req,res)=>{   //this will going to never bcz we have made static page as index.html
//     res.send('<h1>Weather</h1>')

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Nilesh'
    })
})

// }) 
// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'nilesh',
//         age:45
//     },
// {
//     name:'mukesh',
//     age:33
// }])
// })

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Helping hands',
        help:'Portal for Help',
        number:1990,
        name:'Nilesh'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:404,
        name:'Nilesh',
        errormsg:'Help article Not Found'
    })

})
// app.get('/about',(req,res)=>{
//     res.send('<h1>About</h1>')
// })
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'about page this is',
        name:'Nilesh'
}) 
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Not found Address'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })

    })
    // res.send({
    //     forecast:'It is snowing',
    //     location:'Bhopal',
    //     address:req.query.address    //this req.query is to get value and address is what we have give in url by ?
    // }) 
})
app.get('/products',(req,res)=>{
     if(!req.query.search){
         return res.send({
             error:'Please give search value'
         })
     }
     console.log(req.query.search);
    res.send({
        product:[] 
    })

})

app.get('*',(req,res)=>{

    res.render('404',{
        title:404,
        name:'Nilesh',
        errormsg:'Page not Found'
    }) 
})

app.listen(3000,()=>{
    console.log('server is up on port 3000.');
})