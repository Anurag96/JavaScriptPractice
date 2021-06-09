class Airport{
    constructor(name,arrivalTime,departureTime){
        this.name = name;
        this.time={
            start : arrivalTime,
            end : departureTime
        }
    }

    Flight(v1,v2){
        this.time.start=v1,
        this.time.end=v2
    }
}

export default Airport;