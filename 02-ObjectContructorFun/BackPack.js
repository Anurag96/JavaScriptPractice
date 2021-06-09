class BackPack {

    constructor(color,size,zipper,strapLengthL,strapLengthR){
        this.color=color;
        this.size=size;
        this.zipper=zipper;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
          };
    }
}

export default  BackPack;