import { Article } from './Article';
import { User } from './User';

export interface ArticleSaveForLater {
  id: string;
  user: User;
  article: Article;
}
