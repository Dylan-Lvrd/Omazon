export interface IProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    category: ICategory;
    tag: ITag | number;
    description: string;
}

export interface ICategory {
    id: number;
    title: string;
    slug: string;
    image: string;
}

export interface ITag {
    id: number;
  type: string;
  text: string;
}