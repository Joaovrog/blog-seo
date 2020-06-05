import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

constructor(private http: HttpClient) { }

getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:8000/articles');
}

getArticle(key:string): Observable<Article> {
    return this.http.get<Article>('http://localhost:8000/articles/' + key);
}

}
