export class Article {
  id?: string;
  name: string;
  cost: number;
  imageUrl: string;
  categoryId: string;
  description: string;

  constructor(
    id: string,
    name: string,
    cost: number,
    imageUrl: string,
    categoryId: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.categoryId = categoryId;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
