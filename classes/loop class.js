class table{
    constructor(value){
        this.value=value;
    }
    table(){              //class name and function name can be same
        for (let j=0;j<=(this.value.length-1);j++){
            console.log(`This is the Table of ${this.value[j]}`);
            let a=1; 

            for (let i=1;i<=10;i++){
                a=this.value[j];
                 a=a*i;
                console.log(a);
               
               
                // const a1 = 2;
                // const b1 =3;
                // let add1= 0;
                // setTimeout(() => {
                //     // code is here
                //     console.log('Inside');
                //     add1 =  a1+b1;
                // }, 50);
                   
            
        
            }
        
        }
     return `T`;

    }

    }

const b=new table([2,3,4,5]);
b.table();    //it will run function table() not class 'table' bcz im invoking table function.