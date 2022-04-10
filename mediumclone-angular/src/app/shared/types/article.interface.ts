import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  taglist: string[];
  description: string;
  author: ProfileInterface;
  favorite: boolean;
  favoritesCount: number;
}
