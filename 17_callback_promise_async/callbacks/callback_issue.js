

const students = [
    {name: 'Anurag',subject:'javascript'},
    {name: 'Kumar',subject:'Callback'}
]

function enrollStudent(student){
    
    setTimeout(()=>{
        students.push(student)
    },3000);

  
}

function getStudent(){
    setTimeout(()=>{
       let str='';
       students.forEach((student)=>{
        str+=`<li>${student.name}</li>`
       }) 
       document.getElementById('students').innerHTML=str;
    },1000);
}

let newStudnet ={name: 'Monish',subject:'Callback'};
enrollStudent(newStudnet)
getStudent()