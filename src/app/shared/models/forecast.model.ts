export class Forecast{
    
    public city: string;
    public hour: string;
    public temp: string;
    public latitude:number;
    public longitude: number;
    public timezone: string;
    public key:string;

    constructor(city:string , hour: string, temp:string, latitude: number, longitude: number, key:string){
        this.city= city;
        this.hour= hour;
        this.temp = temp;
        this.latitude= latitude;
        this.longitude = longitude;
        this.key = key;
    }
}