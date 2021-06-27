export class Category {
  public name: string;
  public key: string;
  public description: string;
  public enabled: boolean;
  public order: string;
  public imageUrl: string;
  public id: string;
  constructor(data?: any) {
    data = data || {};
    this.name = data.name || '';
    this.key = data.key || '';
    this.description = data.description || '';
    this.enabled = data.enabled || '';
    this.order = data.order || '';
    this.imageUrl = data.imageUrl || '';
    this.id = data.id || '';
  }
}
