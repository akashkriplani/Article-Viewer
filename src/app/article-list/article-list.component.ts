import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {Article} from "../models/article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articleArray: Array<Article>;

  constructor(private articleService:ArticleService) { 
    // this.articleService = articleService;
  }

  ngOnInit() {
    this.articleService.getArticleList().subscribe(articleArray => {
      this.articleArray = articleArray;
    });
  }

}