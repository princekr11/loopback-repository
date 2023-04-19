import { Entity } from '../../..';
export declare class Product extends Entity {
    id: number;
    name: string;
    slug: string;
    createdAt: Date;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;
