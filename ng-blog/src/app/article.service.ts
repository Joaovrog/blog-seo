import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-article';
import { of } from 'rxjs';

@Injectable()
export class ArticleService {

constructor() { }

getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
}

getArticle(key:string): Observable<Article> {
    const articles: Article[] = ARTICLES.filter(a => a.key === key);
    return of(articles[0]);
}

}
