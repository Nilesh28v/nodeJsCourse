let profile= {
    name:'Nilesh',
    tech :'JS',
    laptop1: {
        cpu:'i5',
        ram:4,
        brand:'Asus'
    }
}

console.log(profile?.laptop?.cpu?.lengt); //it will not give error, just give undefined because we use ? sign