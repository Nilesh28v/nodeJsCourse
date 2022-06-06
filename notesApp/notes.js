const { json } = require('express/lib/response')
const fs=require('fs')

const getNotes=()=> {
    return 'your notes..'
}


const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>{
        return note.title===title;
    })
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log('new note');
        
    }else{
        console.log('duplicate note title');
    }
    
     
 
} 
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
} 
const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const  dataJSON=dataBuffer.toString();
        return   JSON.parse(dataJSON);

    }catch(e){
        return []

    }
  

}
module.exports={
    getNotes:getNotes,
    addNote:addNote
}