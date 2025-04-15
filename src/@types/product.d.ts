export interface IProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    categoryId: ICategory | number;
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