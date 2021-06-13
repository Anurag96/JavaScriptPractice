const students = [
    {name:'Anurag',subject:'english'},
    {name:'Akriti',subject:'maths'},
    {name:'Mansiha',subject:'Science'},
    {name:'Amar',subject:'Social'}
]


function studentDetails(student,callback){
    setTimeout(()=>{
        students.push(student)
        console.log('data sent')
        callback();
    },3000);
}

function getStudent(){
    setTimeout(()=>{
        let str='';
        students.forEach((student)=>{
            str+=`
           <li> ${student.name} studies ${student.subject} </li>
            `
            document.getElementById('students').innerHTML=str;
        })
        console.log('data sent1')
    },1000)
}


studentDetails({name:'Amar',subject:'Social'},getStudent)
