import Book from './Book.js'

// constructor(bookTitle,bookType,noOfpages,fbookColor,bbookColor,bookBind)


const bookResult = new Book('JavaScript','Ruler',234,'blue','white',true,true)
const bookResult1 = new Book('Jva','Plain',300,'Red','Black',true,false)
console.log("The result of book",bookResult)
 console.log(bookResult.bookColorIdentify())
 console.log(bookResult.bookToBind())
 console.log(bookResult.bookreadStatus())
 console.log("The result of book2",bookResult1)
 console.log(bookResult1.bookColorIdentify())
 console.log(bookResult1.bookToBind())
 console.log(bookResult1.bookreadStatus())