import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Article } from '../models/article';
import 'rxjs/add/operator/map';

@Injectable()

export class ArticleService {

  constructor(public http: Http) { }

  // Get the list of articles from JSONPlaceholder Typicode - Fake Test API Service
  getArticleList(): Observable<Array<Article>> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(response => response.json());
  }
  
  // Get the specific article from JSONPlaceholder Typicode - Fake Test API Service
  getArticleDetails(id): Observable<Article> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id).map(response => response.json());
  }
}