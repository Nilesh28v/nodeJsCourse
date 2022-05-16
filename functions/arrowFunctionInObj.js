const a = {
    name: "birthday party",
    // print:function (){
    //     console.log('guest list for ' + this.name);  //this works fine
    // print: () => {
    //     console.log('guest list for '+ this.name);   

    // }
    guestList:['aman','mukesh','ramu'],
    print(){
        console.log('guest list for  '+this.name);   //this worked fine
        this.guestList.forEach((a)=>{
            console.log(a +' is attending ' +this.name);

        })


    }
}
a.print();