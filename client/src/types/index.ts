import { ClassScreenQuery, CourseScreenQuery, ArticleScreenQuery, MeditationScreenQuery } from "../graphql";
import { FavoriteContent } from "../screens/FavoritesScreen/types";

export * from './utils';

export interface Props {
    id: string;
    content?: FavoriteContent ;
}

export interface PropsB {
    id?: string;
    content?: FavoriteContent ;
}

export interface PropsClass {
    content: ClassScreenQuery["Class"];
}

export interface PropsCourses {
    content: CourseScreenQuery["Course"];
}
export interface PropsArticle {
    content: ArticleScreenQuery["Article"];
}

export interface PropsMeditation {
    content: MeditationScreenQuery["Meditation"];
  }