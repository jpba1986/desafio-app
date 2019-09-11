export class LocationModel{
    
    public latitude: number;
    public longitude: number;
    public timezone: string;

    constructor(latitude: number,longitude: number,timezone: string ){
        this.latitude= latitude;
        this.longitude = longitude;
        this.timezone = timezone;
    }
}