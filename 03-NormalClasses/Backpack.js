class Backpack{
constructor(color,size,leftTot,rightTot)
{
    this.color=color;
    this.size=size;
    this.totalZip={
        left : leftTot,
        right : rightTot
    }
     
    }

    ZipCount(val1,val2){
        this.totalZip.left=val1,
        this.totalZip.right=val2
    }
}

export default Backpack;