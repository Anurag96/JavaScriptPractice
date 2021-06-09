class Backpack{
    constructor(dateAcquired,color,backpackBrnd){
        this.dateAcquired=dateAcquired;
        this.backpackBrnd=backpackBrnd;
        this.color=color;

    }
    backpackAge(){
        let now = new Date();
        
        let a=this.dateAcquired
        let acquired =new  Date(a);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed/(1000*3600*24));
        return daysSinceAcquired;
    }
    backpackColor(){
        this.bagColor=this.color
        return "The color of bag : "+this.bagColor;
    }

    backpackBrand(){
        this.bagBrand=this.backpackBrnd;
        return "The brand of backpack : "+this.bagBrand;
    }

}

export default Backpack;