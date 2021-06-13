

const students = [
    {name: 'Anurag',subject:'javascript'},
    {name: 'Kumar',subject:'Callback'}
]

function enrollStudent(student,callback){
    
    setTimeout(()=>{
        students.push(student)
        callback();
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
enrollStudent(newStudnet,getStudent)
