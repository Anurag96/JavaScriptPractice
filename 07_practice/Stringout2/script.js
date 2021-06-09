import Backpack from './Backpack.js'

const endResult = new Backpack('green',23,2,3);

console.log(endResult);

const content= 

"<li>Bag Right Pocket : "+endResult.totalZip.right+ "</li>" 

;


/*
const content= "<ul>"
"<li>Bag Color : "+endResult.color+ "</li>"
"<li>Bag Size : "+endResult.size+ "</li>"
"<li>Bag Left Pocket : "+endResult.totalZip.left+ "</li>"
"<li>Bag Right Pocket : "+endResult.totalZip.right+ "</li>" 
"</ul>"
;


const content = `
<main>
      <article>
        <h1>Everyday Backpack</h1>
        <ul>
          <li>Bag Color : ${endResult.color}</li>
          <li>Bag Size : ${endResult.size}</li>
          <li>Bag Left Pocket : ${endResult.totalZip.left} </li>
          <li>Bag Right Pocket : ${endResult.totalZip.right}</li>
        </ul>
      </article>
    </main>

`
 */

document.body.innerHTML=content;