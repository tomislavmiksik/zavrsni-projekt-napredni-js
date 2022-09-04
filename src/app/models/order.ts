import { Article } from "./article";

export class Order {
  id?: string;
  articles: Article[] = [];
  total: number = 0;
}
