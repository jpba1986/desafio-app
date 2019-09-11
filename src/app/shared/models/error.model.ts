export class ErrorModel{
    
    public timestamp: number;
    public error: string;

    constructor(timestamp: number , error: string ){
        this.timestamp= timestamp;
        this.error= error;
    }
}