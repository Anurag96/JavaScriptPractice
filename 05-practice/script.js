import Airport from './Airport.js'
import Shopping from './Shopping.js'
import Backpack from './Backpack.js'

const finalRes = new Airport('AirIndia',3,8);
const finalRes1 = new Shopping('5:00pm');
const backpackVal = new Backpack('Sat May 1 2020 12:37:44','Blue','Gucci')

// console.log('Current date',backpackVal)
console.log('Current date :',new Date())
console.log('Acquired date : ',backpackVal.dateAcquired)
console.log('Days since acquired : ',backpackVal.backpackAge(),' days is the difference')
// console.log(backpackVal.color)
console.log(backpackVal.backpackBrand())
console.log(backpackVal.backpackColor())
console.log(finalRes)
console.log(finalRes1)