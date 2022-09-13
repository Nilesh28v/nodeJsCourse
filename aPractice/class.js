class a{
    constructor(b,c){
        this.b='b';
        this.c='c';
    }
    e(){console.log(this.b);}
}
class f extends a{
    constructor(b,c,g){
        super(b,c,g)
        this.g=g;
    }
    h(){
        console.log(this.b,this.c,this.g);
    }
}
const crun=new f('abc');
console.log(crun.h());

