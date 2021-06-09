
const immigrantDetails ={
    name:'Anurag Kumar',
    visaStatus : true,
    nationality:'Indian',
    age:26,
    job:'software developer'
}

const immigrantDetailsResult = (val)=>{
const newArticle = document.createElement('article');
newArticle.innerHTML = `
<h1>${val.name}</h1>
<ul>
<li>Is status active ? : ${val.visaStatus}</li>
<li>Nationality : ${val.nationality}</li>
<li>Age : ${val.age}</li>
<li>Job Description: ${val.job}</li>
</ul>

`;
return newArticle
}

const main = document.querySelector('main')
main.prepend(immigrantDetailsResult(immigrantDetails))
