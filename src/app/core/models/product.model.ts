export class Product{
    public name: string;
    public key: string;
    public description: string;
    public enabled: string;
    public imageURL: string;
    public order: string;
    public id: string;
    public price: number;
    public stock: number;
    public sku: string;

    constructor(data?: any){
         data = data || {};
         this.name = data.name || '';
         this.key = data.key || '';
         this.description = data.description || '';
         this.enabled = data.enabled || '';
         this.order = data.order || '';
         this.imageURL = data.imageURL || '';
         this.id = data.id || '';
         this.price = data.price || 0.0;
         this.stock = data.stock || 0;
         this.sku = data.sku || '';
     }




}



