export class Product{
    public name: string;
    public key: string;
    public description: string;
    public enabled: string;
    public imageURL: string;
    public order: string;
    public id: string;

    constructor(data?: any){
         data = data || {};
         this.name = data.name || '';
         this.key = data.key || '';
         this.description = data.description || '';
         this.enabled = data.enabled || '';
         this.order = data.order || '';
         this.imageURL = data.imageURL || '';
         this.id = data.id || '';
     }




}



