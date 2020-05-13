export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// Example of a business object class that implements interface IProduct
export class Product implements IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;

    constructor(productId: number,
        productName: string,
        productCode: string,
        releaseDate: string,
        price: number,
        description: string,
        starRating: number,
        imageUrl: string) {
    }

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}