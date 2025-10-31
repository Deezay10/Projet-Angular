import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from './services-list-article';

@Injectable({
  providedIn: 'any'
})
export class ServicesArticleForm {
  private apiUrl = "http://localhost:3000/articles/save";

  constructor(private http: HttpClient) {
  }

  getArticleById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addArticle(article: Article): Observable<any> {
    return this.http.post(this.apiUrl, article);
  }

  updateArticle(id: string, article: Article): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}`, article);
  }
}
