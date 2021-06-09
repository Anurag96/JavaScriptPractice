class Book{
    constructor(bookTitle,bookType,noOfpages,fbookColor,bbookColor,bookBind,readStatus){
        this.bookTitle=bookTitle;
        this.myreadStatus=readStatus;
        this.bookType=bookType;
        this.noOfpages=noOfpages;
        this.bookColor={
            frontColor : fbookColor,
            backColor : bbookColor 
        };
        this.bookBind=bookBind;
 
          //object Constructor function
        this.bookToBind = function(){
            this.bookBindExist=bookBind;
            console.log('The bind of book : ', bookBind)
          
        };

    //object Constructor function
        this.bookColorIdentify= function(){
            this.bookColor.frontColor=fbookColor;
            this.bookColor.backColor=bbookColor
            console.log('The front book color : ', fbookColor);
            console.log('The Back book color : ', bbookColor);
        }
        ;
    
    }

    //Normal class method
    bookreadStatus(){
        this.statusRead = this.myreadStatus;
        console.log('The Read status : '+ this.statusRead);      
        }
}

export default  Book;