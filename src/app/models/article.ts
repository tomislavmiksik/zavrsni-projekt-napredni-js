export class Article {
  id: string;
  name: string;
  price: number;
  categoryId: string;

  constructor(
    id: string,
    name: string,
    price: number,
    liked: boolean,
    categoryId: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
  }
}
