class a{
    constructor(name){
        this.name='nilesh'

    }
    e(){
        console.log(this.name);
    }
}
class b extends a{
    constructor(name,sname){
        super(name,sname)
     
        this.sname=sname
    }
    d(){
        console.log(`my name is ${this.name} ${this.sname}`);
    }
}
const c=new b('vishwakarma')
console.log(c.d());