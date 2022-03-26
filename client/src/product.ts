export interface Product{
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    //question mark gives these properties the ability to be optional, thuse we don't NEED to include them in our set state function
    brand?: string;
    type?: string;
    quantityInStock: number;
}