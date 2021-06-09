
window.age=25
const immigrantDetails ={
    name:'Anurag Kumar',
    visaStatus : true,
    nationality:'Indian',
    age:26,
    job:'software developer',
    newData : function(ageVal){
        console.log("Name of the person : ",this.name)
        console.log("Visa Status of the person active ? ",this.visaStatus);
        console.log("Nationality of the person : ",this.nationality);
        console.log("Age of the person 2020 : ",this.age);
        this.age=ageVal;
        console.log("Age of the person 2021 : ",this.age);
        (function(){
            console.log('IIFE : ',this.age)
        })();
        (()=>{
            console.log('Arrow function : ',this.age)
        })();
        console.log("Job of the person : ",this.age);
    }
}

console.log(immigrantDetails.newData(27));

