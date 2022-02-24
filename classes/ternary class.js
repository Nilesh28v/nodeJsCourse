class world{
    constructor (country1,country2){
        this.country1=country1;
        this.country2=country2;
    }
    countryName(){
        const ukrain =2;
        const russia =22;
        const a=( ukrain>russia)? 'ukrain':'russia';
        return `In the War of ${this.country1} and ${this.country2}, ${a} is wining.`

    }

}
const b=new world('Ukrain','Russia');
console.log(b.countryName());