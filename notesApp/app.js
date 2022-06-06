//const validator=require('validator');
const notes=require('./notes.js')
// const chalk=require('chalk');
// var blue=chalk.blue('Hello world');
// console.log(blue);
const yargs=require('yargs');
 
// const command=process.argv[2] ; //process is having many mthods but we are using argv
//argv having 3 line and last line is having our data sended by cmd //node app.js remove
// if (command=='add'){
//     console.log('adding value');
// }
// else if(command=='remove'){
//     console.log('rmoving value');
// }
// console.log(notes());
// console.log(validator.isEmail('example@gmail.com')); //we get true or false
// console.log(validator.isURL('https/google')); //flase
// const fs= require('fs');

// //.writeFileSync('notes.txt','This file was created by Node.js');
// fs.appendFileSync('notes.txt','This file is appended');


// console.log(process.argv);

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        body:{
            describe:'Note body',
            demandOption:true, //if we want title is required we use this
            type:'string'
  
        },
        title:{
            describe:'Note title',
            demandOption:true, //if we want title is required we use this
            type:'string'
  
        }
    },
    handler(argv){

        notes.addNote(argv.title,argv.body)
        // console.log('Title:' + argv.title)
        // console.log('Body:'+argv.body);
        // //console.log('Adding a new note!',argv);

    }
})
  //remove command

yargs.command({ 
      command:'remove',
      describe:'Remove a note',
      handler(){
          console.log('removing the notes');
      }
  })
  yargs.command({
    command:'list',
    describe:'listing a note',
    handler(){
        console.log('listing the notes');
    }
})
//read
yargs.command({
    command:'read',
    describe:'reading a note',
    handler(){
        console.log('reading the notes');
    }
})

yargs.parse()
//yargs supports add,remove,read, list
//console.log(yargs.argv);  //node app.js add --title="Things to buy"   


