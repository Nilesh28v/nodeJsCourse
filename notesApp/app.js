const fs= require('fs');
//.writeFileSync('notes.txt','This file was created by Node.js');
fs.appendFileSync('notes.txt','This file is appended');